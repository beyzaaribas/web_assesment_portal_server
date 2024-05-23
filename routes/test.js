
const { createTest, updateTest, deleteTest, getAllTests, getTestDetail } = require("../controllers/test.js");
const { adminControl } = require("../middleware/verify.js");
  
  const express = require("express");
  
  const router = express.Router();
  
  router.post("/createTest", adminControl, createTest);
  router.put("/updateTest/:id", adminControl, updateTest);
  router.delete("/deleteTest/:id", adminControl, deleteTest);
  router.get("/getAllTests",  getAllTests)
  router.get("/getTestDetail/:id", getTestDetail)

  module.exports = router;
  