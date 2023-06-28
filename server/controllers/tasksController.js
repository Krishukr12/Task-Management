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

const getTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const task = await TaskModel.findById(taskId);
    if (!task) {
      return next(createError(404, "Task not found"));
    }
    res.status(200).json({ success: true, task });
  } catch (error) {
    console.error("Error retrieving task:", error);
    return next(
      createError(500, "An error occurred while retrieving the task")
    );
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await TaskModel.findByIdAndDelete(taskId);
    if (!deletedTask) {
      return next(createError(404, "Task not found"));
    }

    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    return next(createError(500, "Error deleting task: "));
  }
};

module.exports = {
  createTask,
  updateTask,
  getAllTasks,
  getTask,
  deleteTask,
};
