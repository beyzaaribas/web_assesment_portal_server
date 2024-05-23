
const { createUserResult, getUserResult, getAllResults,sendResultToUser } = require("../controllers/userResult.js");
const { adminControl, verifyToken } = require("../middleware/verify.js");
  
  const express = require("express");
  
  const router = express.Router();
  
  router.post("/createResult", verifyToken, createUserResult);
  router.get("/getResultDetail/:resultId", adminControl, getUserResult);
  router.get("/getAllResults", adminControl, getAllResults)
  router.put("/sendResultToUser/:id", adminControl, sendResultToUser);

  module.exports = router;
  