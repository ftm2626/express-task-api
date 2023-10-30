const taskModel = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const task = await taskModel.find({});
    // res.status(200).json({ task, amount: task.length });
    res.status(200).json({ data: task, success: true, status: 200 });
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
const updateTask = async (req, res) => {
  try {
    const task = await taskModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true, //returns the new value in response
        runValidators: true,
      }
    );
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const removeTask = async (req, res) => {
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
