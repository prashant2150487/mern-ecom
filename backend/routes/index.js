const express = require("express");
const router = express.Router();

const userSignUpController = require("../controllers/userSignUp.js");
const userSignInController = require("../controllers/userSignIn.js");

router.post("/signup", userSignUpController);
router.get("/signin",userSignInController)

module.exports = router;
