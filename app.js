const express = require("express");
const tasksRoute = require("./routes/tasks");
const { connectDB } = require("./db/connect");
const { notFound } = require("./middleware/not-found");
const { errorHandler } = require("./middleware/error-handler");
const app = express();

require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/task", tasksRoute);

app.use(notFound)

app.use(errorHandler)

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
