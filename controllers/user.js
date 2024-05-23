const User = require("../modules/User.js");

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { username, password, email, phoneNumber } = req.body;
  try {
    const mailControl = await User.findOne({ email });
    const usernameControl = await User.findOne({ username });
    const phoneControl = await User.findOne({ phoneNumber });
    if (usernameControl && usernameControl._id.toString() !== id) {
      return res.status(200).json({
        isSuccess: false,
        message: "There is a user belonging to this username.",
      });
    }

    if (password) {
      if (password.length < 6) {
        return res.status(400).json({
          isSuccess: false,
          message: "Password must be at least 6 characters long.",
        });
      }
    }

    if (mailControl && mailControl._id.toString() !== id) {
      return res.status(200).json({
        isSuccess: false,
        message: "There is a user belonging to this email.",
      });
    }

    if (phoneControl && usernameControl._id.toString() !== id) {
      return res.status(200).json({
        isSuccess: false,
        message: "There is a user belonging to this phone number.",
      });
    }

    const user = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      isSuccess: true,
      user,
      message: "User update successful.",
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: "An error occurred. Please try again later.",
    });
    console.log(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ isSuccess: true, message: "User Delete Successful" });
  } catch (error) {
    res.status(200).json({ isSuccess: false, message: error });
  }
};

const getDetailUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ isSuccess: true, user });
  } catch (error) {
    res.status(400).json({ isSuccess: false, error: error });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json({ isSuccess: true, user });
  } catch (error) {
    res.status(400).json({ isSuccess: false, message: error });
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getDetailUser,
  getAllUsers,
};
