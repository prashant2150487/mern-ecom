const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: String,
    brandName: String,
    category: String,
    price: Number,
    description: String,
    productImage: [],
    sellingPrice: Number,
  },
  {
    timestamp: true,
  }
);

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
