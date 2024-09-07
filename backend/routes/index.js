const express = require("express");
const router = express.Router();

const userSignUpController = require("../controllers/userSignUp.js");
const userSignInController = require("../controllers/userSignIn.js");
const authToken = require("../middleware/authToken.js");
const userDetailsController=require("../controllers/userDetails.js")    

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details",authToken,userDetailsController)

module.exports = router;
