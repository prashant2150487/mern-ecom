const userModel = require("../models/userModel");

async function allUsers(req, res) {
  try {
    const allUser = await userModel.find()

    console.log("User-ID", req.userId);
    res.status(200).json({
      message: "all users",
      data: allUser,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      success: false,
      error: true,
    });
  }
}
module.exports = allUsers;
