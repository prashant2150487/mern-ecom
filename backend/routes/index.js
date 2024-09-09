const express = require("express");
const router = express.Router();

const userSignUpController = require("../controllers/userSignUp.js");
const userSignInController = require("../controllers/userSignIn.js");
const authToken = require("../middleware/authToken.js");
const userDetailsController = require("../controllers/userDetails.js");
const userLogOut = require("../controllers/userLogOut.js");
const allUsers = require("../controllers/allUsers.js");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogOut);

// admin-panel
router.get("/all-users",authToken, allUsers);


module.exports = router;
