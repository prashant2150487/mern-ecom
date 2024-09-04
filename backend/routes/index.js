const express = require("express");
const router = express.Router();

const userSignUpController = require("../controllers/userSignUp.js");

router.post("/signup", userSignUpController);

module.exports = router;
