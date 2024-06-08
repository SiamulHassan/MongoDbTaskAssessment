const express = require("express");
const userRouter = require("./userRoute");
const taskRouter = require("./taskRoute");
const router = express.Router();

router.use("/user", userRouter);
router.use("/tasks", taskRouter);
module.exports = router;
