async function allUsers(req, res) {
  try {
    console.log(req.userId);
    res.status(200).json({
        message:'all user fetched '
    })
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      success: false,
      error: true,
    });
  }
}
module.exports = allUsers;
