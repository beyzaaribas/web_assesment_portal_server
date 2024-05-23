const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    phoneNumber:{
      type:String,
      required: true
    },
    companyName: {
      type: String,
      required: true,
    },
    companySector:{
      type:String,
      required:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country:{
      type: String,
      required: true,
    },
    numberOfEmployees:{
      type:Number,
      required:true
    },
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: Number,
      default: 0,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
