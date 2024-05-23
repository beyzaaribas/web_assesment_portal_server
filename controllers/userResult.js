const FinishedTests = require("../modules/FinishedTests");
const UserResult = require("../modules/UserResult");
const User = require("../modules/User.js");
const { orderTemplate, sendMail, orderCreatedTemplate, sendResultTemplate } = require("../utils/mail.js");

const { getUserIdWithToken } = require("../utils/getUserIdWithToken");

const createUserResult = async (req, res, next) => {
  const userId = getUserIdWithToken(req.cookies.token);
  const resultData = { ...req.body };

  const user = await User.findById(userId);

  const userData = {
    username: user.username,
    company: user.companyName,
    mail: user.email,
  };

  try {
    const userResult = await UserResult.create({
      ...resultData,
      userId: userId,
      user: userData,
    });

    const test = await FinishedTests.create({ ...req.body, userId: userId });

    return res.status(200).json({
      isSuccess: true,
      message:
        " Your test has been forwarded to us. We will send the results to your e-mail address registered in your account as soon as possible.",
      userResult,
    });
  } catch (error) {
    return res.status(500).json({
      isSuccess: false,
      message: "An error occurred. Please try again later.",
      error: error,
    });
  }
};

const getUserResult = async (req, res, next) => {
  const { resultId } = req.params;
  try {
    const userResult = await UserResult.findOne({ _id: resultId });
    return res.status(200).json({ isSuccess: true, userResult });
  } catch (error) {
    return res.status(500).json({
      isSuccess: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

const getAllResults = async (req, res, next) => {
  try {
    const userResult = await UserResult.find();
    return res.status(200).json({ isSuccess: true, userResult });
  } catch (error) {
    return res.status(500).json({
      isSuccess: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

const sendResultToUser = async (req, res, next) => {

  const {id} = req.params

  try {
    const userResult = await UserResult.findByIdAndUpdate(id, {
      ...req.body,
      statu:true
    });

    console.log(req.body.user[0].mail)
    const mailTemplate = sendResultTemplate("Your Test Has Been Concluded", req.body.resultMessage, req.body.user[0].username);
    await sendMail(req.body.user[0].mail, "Your Test Has Been Concluded", mailTemplate);

    return res.status(200).json({
      isSuccess: true,
      message: "The result has been successfully delivered to the user.",
    });
  } catch (error) {
    return res.status(500).json({
      isSuccess: false,
      message: "An error occurred. Please try again later.",
      error:error
    });
  }
};

module.exports = {
  createUserResult,
  getUserResult,
  getAllResults,
  sendResultToUser,
};
