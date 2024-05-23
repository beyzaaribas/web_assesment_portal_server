const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    testId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Questions", questionsSchema);
