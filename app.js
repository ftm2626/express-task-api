const express = require("express");
const tasksRoute = require("./routes/tasks");
const { connectDB } = require("./db/connect");
const app = express();
require("dotenv").config();

// middleware

app.use(express.json());

//routes

app.get("/hello", (req, res) => {
  res.send("task manager app");
});

app.use("/api/v1/task", tasksRoute);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("server is listening..."));
  } catch (error) {
    console.log(error);
  }
};

start();
