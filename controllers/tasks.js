const { createCustomError } = require("../errors/custom-error");
const { asyncWrapper } = require("../middleware/async");
const { errorHandler } = require("../middleware/error-handler");
const taskModel = require("../models/task");

// const getAllTasks = async (req, res) => {
//   try {
//     const task = await taskModel.find({});
//     // res.status(200).json({ task, amount: task.length });
//     res.status(200).json({ data: task, success: true, status: 200 });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await taskModel.find({});
  // res.status(200).json({ task, amount: task.length });
  res.status(200).json({ data: task, success: true, status: 200 });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await taskModel.create({
    name: req.body.name,
    completed: false,
  });
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const task = await taskModel.findOne({
    _id: req.params.id,
  });
  if (!task) {
    return next(createCustomError("no item found", 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const task = await taskModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true, //returns the new value in response
      runValidators: true,
    }
  );
  if (!task) {
    return next(createCustomError("no item found", 404));
  }
  res.status(200).json({ task });
});

const removeTask = asyncWrapper(async (req, res, next) => {
  const task = await taskModel.deleteOne({
    _id: req.params.id,
  });
  if (!task) {
    return next(createCustomError("no item found", 404));
  }
  res.status(200).json({ task });
});
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  removeTask,
};
