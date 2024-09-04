const userModel = require("../models/userModel.js");
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;
    console.log(name, email, password);
    const user = await userModel.findOne({ email });
    if (user) {
      throw new Error("user exist already");
    }
    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    if (!name) {
      throw new Error("Please provide name");
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);
    if (!hashPassword) {
      throw new Error("Something is wrong");
    }
    const payLoad = {
      ...req.body,
      role: "GENRAL",
      password: hashPassword,
    };
    const userData = new userModel(payLoad);
    const saveUser = await userData.save();
    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created Successfully",
    });
  } catch (err) {
    console.log(err);
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = userSignUpController;
