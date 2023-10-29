const taskModel = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const task = await taskModel.find({});
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await taskModel.create({
      name: req.body.name,
      completed: false,
    });
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  } 
};

const getTask = async (req, res) => {
  try {
    const task = await taskModel.findOne({
      _id: req.params.id,
    });
    if (!task) {
      return res.status(404).json({ msg: "no item found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = (req, res) => {
  res.send("update task");
};
const removeTask = async(req, res) => {
    try {
    const task = await taskModel.deleteOne({
      _id: req.params.id,
    });
    if (!task) {
      return res.status(404).json({ msg: "no item found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  removeTask,
};
