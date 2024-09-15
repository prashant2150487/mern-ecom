const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token || req.headers.cookie.split("=")[1];

    // console.log(token);
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: No token provided",
        error: true,
        success: false,
      });
    }
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      // console.log(err);
      // console.log("decode", decoded);
      if (err) {
        console.error("Error verifying token:", err);
        return res.status(401).json({
          message: "Unauthorized: Invalid token",
          error: true,
          success: false,
        });
      }
      req.userId = decoded?._id;
      next();
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
}
module.exports = authToken;
