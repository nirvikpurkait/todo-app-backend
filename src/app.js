const express = require("express");
const cors = require("cors");

const addTaskRoute = require("./routes/add-task_route");
const taskListRoute = require("./routes/task-list_route");
const { errorMw } = require("./middlewares/ERROR-MW");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/add-task", addTaskRoute);
app.use("/task-list", taskListRoute);

app.use(errorMw);

module.exports = app;
