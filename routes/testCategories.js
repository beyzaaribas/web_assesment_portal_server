const { createCategory, updateCategory, deleteCategory, getAllCategories, getCategoryDetail } = require("../controllers/testCategories.js");
const { adminControl } = require("../middleware/verify.js");
  
  const express = require("express");
  
  const router = express.Router();
  
  router.post("/createCategory", adminControl, createCategory);
  router.put("/updateCategory/:id", adminControl, updateCategory);
  router.delete("/deleteCategory/:id", adminControl, deleteCategory);
  router.get("/getAllCategories",  getAllCategories)
  router.get("/getCategoryDetail/:id", getCategoryDetail)

  module.exports = router;
  