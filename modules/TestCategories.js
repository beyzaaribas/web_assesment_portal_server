const mongoose = require("mongoose");

const testCategoriesSchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    }
  },
);

module.exports = mongoose.model("TestCategories", testCategoriesSchema);
