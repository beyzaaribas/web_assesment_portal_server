const mongoose = require("mongoose");

const answersSchema = new mongoose.Schema(
  {
    answer: {
      type: String,
      required: true,
    },
    questionId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
  },
);

module.exports = mongoose.model("Answers", answersSchema);
