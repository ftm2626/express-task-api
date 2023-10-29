const taskModel = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = async (req, res) => {
  const task = await taskModel.create({
    name: req.body.name,
    completed: false,
  });
  res.status(201).json({ task });
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
