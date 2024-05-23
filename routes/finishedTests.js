
const { getUserFinishedTests } = require("../controllers/finishedTests.js");
  
  const express = require("express");
  
  const router = express.Router();
  
  router.get("/getFinishedTests",  getUserFinishedTests)


  module.exports = router;
  