const { Router } = require("express");

const {
  createTask,
  updateTask,
  getAllTasks,
  getTask,
  deleteTask,
} = require("../controllers/tasksController.js");

const taskRouter = Router();
//Create tasks controller
taskRouter.post("/create", createTask);

//Get all tasks controller
taskRouter.get("/", getAllTasks);

//Get particular task controller
taskRouter.get("/:id", getTask);

//Update tasks controller
taskRouter.put("/update/:id", updateTask);

//Delete tasks controller
taskRouter.delete("/delete/:id", deleteTask);

module.exports = {
  taskRouter,
};
