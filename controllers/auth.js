const User = require("../modules/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const register = async (req, res, next) => {
  const { username, password, email, phoneNumber,} = req.body;
  try {
    const user = await User.findOne({ email });
    const usernameControl = await User.findOne({ username})
    const phone = await User.findOne({ phoneNumber})

    if (user != null) {
      return res
        .status(200)
        .json({
          isSuccess: false,
          message: "There is a user belonging to this email.",
        });
    }

    if(usernameControl !== null){
      return res
      .status(200)
      .json({
        isSuccess: false,
        message: "There is a user belonging to this username.",
      });
    }

    if(phone !== null){
      return res
      .status(200)
      .json({
        isSuccess: false,
        message: "There is a user belonging to this phoneNumber.",
      });
    }

    if (password.length < 6) {
      return res
        .status(200)
        .json({
          isSuccess: false,
          message: "This password must be greater than 6 characters.",
        });
    }
    const passwordHash = await bcrypt.hash(password, 12);

 
    const newUser = await User.create({ ...req.body, password: passwordHash});
    res.status(200).json({
      isSuccess:true,
      newUser,
      message:"The user has been created successfully."
    });
   

  } catch (error) {
    res.status(500).json({ isSuccess: false, message: "An error has occurred. Please try again later." });
    console.log(error)
  }
};

const login = async (req, res, next) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(200)
        .json({ isSuccess: false, message: "There is no such user." });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      return res
        .status(200)
        .json({ isSuccess: false, message: "Passwords do not match." });
    }

    const token = await jwt.sign(
      { id: user._id, userType: user.userType },
      "SECRET_KEY",
      { expiresIn: "24h" }
    );

    res.cookie("token", token, { httpOnly: true }).status(200).json({
      isSuccess: true,
      token,
      user
    });
  } catch (error) {
    res.status(500).json({ isSuccess: false, message: "An error has occurred. Please try again later." });
  }
};

module.exports = { register, login };
