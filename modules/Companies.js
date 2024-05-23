const mongoose = require("mongoose");

const companiesSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Companies", companiesSchema);
