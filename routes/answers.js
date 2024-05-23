
const { createAnswer, updateAnswer, deleteAnswer, getAllAnswers, getAnswerDetail, getTestAnswers } = require("../controllers/answers.js");
const { adminControl } = require("../middleware/verify.js");
  
  const express = require("express");
  
  const router = express.Router();
  
  router.post("/createAnswer", adminControl, createAnswer);
  router.put("/updateAnswer/:id", adminControl, updateAnswer);
  router.delete("/deleteAnswer/:id", adminControl, deleteAnswer);
  router.get("/getAllAnswers/:id",  getAllAnswers)
  router.get("/getTestAnswers/:id",  getTestAnswers)

  router.get("/getAnswerDetail/:id", getAnswerDetail)

  module.exports = router;
  