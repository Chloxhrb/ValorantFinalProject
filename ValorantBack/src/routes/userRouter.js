
const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/auth");
const {
  registerUser,
  loginUser,
  getallusers,
  deleteUser,
  getUserProfile
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getUserProfile);
router.delete("/:id", deleteUser);
router.get("/all", getallusers);

module.exports = router;

