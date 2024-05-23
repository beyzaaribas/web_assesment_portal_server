const {
  updateUser,
  deleteUser,
  getAllUsers,
  getDetailUser,
} = require("../controllers/user.js");
const { adminControl, verifyUser } = require("../middleware/verify.js");

const express = require("express");

const router = express.Router();

router.get("/getAllUsers", adminControl, getAllUsers);
router.get("/getUserDetail/:id", verifyUser, getDetailUser);
router.put("/updateUser/:id", verifyUser, updateUser);
router.delete("/deleteUser:id", deleteUser);

module.exports = router;
