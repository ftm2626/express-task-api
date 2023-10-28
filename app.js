const express = require("express");
const tasksRoute = require("./routes/tasks");

const app = express();


// middleware

app.use(express.json())

//routes

app.get("/hello", (req, res) => {
  res.send("task manager app");
});

app.use("/api/v1/task", tasksRoute);

const port = 5000;

app.listen(port, console.log("server is listening..."));
