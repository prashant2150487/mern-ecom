async function userLogOut(req, res) {
  try {
    res.clearCookie("token");
    res.json({
      message: "Logged out successfully",
      error: false,
      success: true,
      data: [],
    });
  } catch (err) {
    response.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = userLogOut;
