
const { createQuestion, updateQuestion, deleteQuestion, getAllQuestions, getQuestionDetail } = require("../controllers/questions.js");
const { adminControl } = require("../middleware/verify.js");
  
  const express = require("express");
  
  const router = express.Router();
  
  router.post("/createQuestion", adminControl, createQuestion);
  router.put("/updateQuestion/:id", adminControl, updateQuestion);
  router.delete("/deleteQuestion/:id", adminControl, deleteQuestion);
  router.get("/getAllQuestions/:id", getAllQuestions)
  router.get("/getQuestionDetail/:id", getQuestionDetail)

  module.exports = router;
  