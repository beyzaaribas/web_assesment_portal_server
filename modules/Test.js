const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  categoryName:{
    type:String,
    required:true
  },
  isJoin:{
    type:Boolean,
    default:false
  },
  isFinished:{
    type:Boolean,
    default:false
  }
});

module.exports = mongoose.model("Tests", testSchema);
