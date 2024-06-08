const Task = require("../model/taskModel");

////////////////// GET TASKS
exports.getAllTask = async function (req, res) {
  const allTask = await Task.find();
  res.status(200).json({
    status: "success",
    data: allTask,
  });
};

///////////////// CREATE TASK
exports.createTask = async function (req, res) {
  try {
    const { title, description } = req.body;
    const createdTask = await Task.create({
      title,
      description,
    });
    res.status(201).json({
      status: "success",
      data: createdTask,
    });
  } catch (error) {
    res.status(400).json({
      status: "faild",
      message: error.message,
    });
  }
};

///////////////////// UPDATE TASK
exports.updateTask = async function (req, res) {
  try {
    const updateTaskId = req.params.id;
    const { title, description } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      updateTaskId,
      {
        title,
        description,
      },
      { new: true }
    );
    res.status(201).json({
      status: "success",
      data: updatedTask,
    });
  } catch (error) {
    res.status(400).json({
      status: "faild",
      message: error.message,
    });
  }
};

//////////////////// DELETE TASKS
exports.deleteTask = async function (req, res) {
  try {
    const updateTaskId = req.params.id;
    // await Task.deleteMany();
    await Task.findByIdAndDelete(updateTaskId);
    res.status(201).json({
      status: "success",
      message: "task deleted",
    });
  } catch (error) {
    res.status(400).json({
      status: "faild",
      message: error.message,
    });
  }
};
