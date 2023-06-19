const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
	completed: {
		type: Boolean,
		default: false,
	},
	taskDetails: {
		type: String,
		default: "A new task",
	},
});

const Task = mongoose.model("Task", taskSchema);

module.exports = {
	Task,
};
