
  const { AddCompany, updateCompany, deleteCompany, getAllCompanies } = require("../controllers/companies.js");
const { adminControl } = require("../middleware/verify.js");
  
  const express = require("express");
  
  const router = express.Router();
  
  router.post("/createCompany", adminControl, AddCompany);
  router.put("/updateCompany/:id", adminControl, updateCompany);
  router.delete("/deleteCompany/:id", adminControl, deleteCompany);
  router.get("/getAllCompanies", adminControl, getAllCompanies)
  module.exports = router;
  