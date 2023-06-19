const express = require("express");

const { addTaskCont } = require("../controllers/add-task_cont");
const { addToDoToDB } = require("../middlewares/add-task_mw");

const router = express.Router();

router.post("/", addToDoToDB, addTaskCont);

module.exports = router;
