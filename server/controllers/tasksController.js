const createTask = (req, res, next) => {
  res.send("Creating task...");
};

const updateTask = (req, res, next) => {
  res.send("Updating task...");
};

const getAllTasks = (req, res, next) => {
  res.send("All tasks are available");
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
