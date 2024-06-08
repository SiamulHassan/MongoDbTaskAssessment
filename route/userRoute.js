const express = require("express");
const registrationController = require("../controller/registrationController");
const loginController = require("../controller/loginController");
const userRouter = express.Router();

userRouter.post("/registration", registrationController);
userRouter.post("/login", loginController);
module.exports = userRouter;
