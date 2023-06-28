const { TaskModel } = require("../models/Task.model");
const { createError } = require("../utils/createError");

const createTask = async (req, res, next) => {
  try {
    const newTask = new TaskModel(req.body);
    await newTask.save();
    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    return next(createError(500, error));
  }
};

const updateTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const updateData = req.body;
    const updatedTask = await TaskModel.findByIdAndUpdate(taskId, updateData, {
      new: true,
    });

    if (!updatedTask) {
      return next(createError(404, "Task not found"));
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    next(createError(500, "An error occurred while updating the task"));
  }
};

const getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await TaskModel.find();
    res.status(200).json({ success: true, tasks: allTasks });
  } catch (error) {
    return next(createError(500, "An error occurred while retrieving tasks"));
  }
};

const getTask = (req, res, next) => {
  res.send("single task");
};

const deleteTask = (req, res, next) => {
  res.send("deleting task");
};

module.exports = {
  createTask,
  updateTask,
  getAllTasks,
  getTask,
  deleteTask,
};
