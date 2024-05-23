
const { getUserStatistics, getAdminStatistics } = require("../controllers/statistics.js");
const { verifyToken, adminControl } = require("../middleware/verify.js");
  
  const express = require("express");
  
  const router = express.Router();
  
  router.get("/getUserStatistics", verifyToken, getUserStatistics);
  router.get("/getAdminStatistics", adminControl, getAdminStatistics);

  module.exports = router;
  