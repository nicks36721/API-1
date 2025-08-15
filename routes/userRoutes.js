const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();
//  Description: Routes for users
// register a user
router.post("/register", registerUser);
// login a user
router.post("/login", loginUser);

module.exports = router;
