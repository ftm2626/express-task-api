const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.send("get task");
};
const updateTask = (req, res) => {
  res.send("update task");
};
const removeTask = (req, res) => {
  res.send("remove task");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  removeTask,
};
