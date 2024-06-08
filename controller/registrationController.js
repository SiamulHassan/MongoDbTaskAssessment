const User = require("../model/userModel");

const registrationController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Email or Password is required !");
    await User.create({
      email,
      password,
    });
    res.send("user created");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
module.exports = registrationController;
