const express = require("express");
const secureApi = require("../utils/secureApi");
const taskController = require("../controller/taskController");
const taskRouter = express.Router();

taskRouter.get("/", secureApi, taskController.getAllTask);
taskRouter.post("/", secureApi, taskController.createTask);
taskRouter.put("/:id", secureApi, taskController.updateTask);
taskRouter.delete("/:id", secureApi, taskController.deleteTask);
module.exports = taskRouter;
