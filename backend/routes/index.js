const express = require("express");
const router = express.Router();

const userSignUpController = require("../controllers/userSignUp.js");
const userSignInController = require("../controllers/userSignIn.js");
const authToken = require("../middleware/authToken.js");
const userDetailsController = require("../controllers/userDetails.js");
const userLogOut = require("../controllers/userLogOut.js");
const allUsers = require("../controllers/allUsers.js");
const updateUser = require("../controllers/updateUser.js");
const UploadProductController = require("../controllers/uploadProduct.js");
const getProductController = require("../controllers/getProduct.js");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogOut);

// admin-panel
router.get("/all-users", authToken, allUsers);
router.post("/update-user", authToken, updateUser);
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);

module.exports = router;
    