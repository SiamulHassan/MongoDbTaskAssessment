const jwt = require("jsonwebtoken");
const secureApi = (req, res, next) => {
  try {
    const { usertoken } = req.headers;
    // compare
    const decoded = jwt.verify(usertoken, process.env.TOKEN_SECRET);
    if (!decoded.email) throw new Error("Invalid token");
    if (decoded.email) {
      next();
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
module.exports = secureApi;
