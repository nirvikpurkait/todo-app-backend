const express = require("express");

const { getTaskListFromDB } = require("../middlewares/task-list_mw");
const { taskListCont } = require("../controllers/task-list_cont");

const router = express.Router();

router.get("/", getTaskListFromDB, taskListCont);

module.exports = router;
