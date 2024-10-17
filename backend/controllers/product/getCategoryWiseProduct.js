const productModel = require("../../models/productModel");

const getCategoryWiseProduct = async (req, res) => {
  try {
    const category = req?.body;
    const product=await productModel({category})
    res.json({
        data:product,
        message:"product",
        error:false,
        success:true
    })

  } catch (err) {
    re.status(400).json({   
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
module.exports=getCategoryWiseProduct