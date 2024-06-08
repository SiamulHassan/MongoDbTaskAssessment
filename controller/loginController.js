var jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Email or Password is required !");
    // find user
    const existedUser = await User.find({ email });
    // pass match
    const matchedPass = existedUser[0].password === password;
    if (!matchedPass) throw new Error("pass not matched");
    if (existedUser.length > 0 && matchedPass) {
      jwt.sign({ email }, process.env.TOKEN_SECRET, function (err, token) {
        if (token) {
          res.status(200).json({
            status: "success",
            token,
          });
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
module.exports = loginController;
