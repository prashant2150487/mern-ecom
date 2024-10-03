const productModel = require("../models/productModel");

const getProductController = async (req, res) => {
  try {
    const allProduct = await productModel.find().sort({ createdAt: -1 });
    console.log(allProduct);
    res.json({
      message: "All Product",
      data: allProduct,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
module.exports = getProductController;
