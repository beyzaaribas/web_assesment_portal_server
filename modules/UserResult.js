const mongoose = require("mongoose");

const userResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  user:{
    type:[],
    required:true
  },
  testId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  questionAndAnswers:{
    type:[],
    required:true
  },
  resultMessage:{
    type:String,

  },
  statu:{
    type:Boolean,
    default:false
  }

});

module.exports = mongoose.model("UserResult", userResultSchema);
