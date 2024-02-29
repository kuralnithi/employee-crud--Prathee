const express = require("express");
const {
  registerUser,
  loginUser,
  getUserById,
  resetPassword,
  resetPasswordpage,
} = require("../Controllers/user.controller");
const { authMiddleware } = require("../Middleware/auth.middleware");

const router = express.Router();

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/getuser", authMiddleware, getUserById);
router.post("/resetpassword", resetPassword);
router.post("/resetpasswordpage", resetPasswordpage);

module.exports = router;
