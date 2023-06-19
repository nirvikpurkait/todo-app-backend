const { Task } = require("../schema-define/Task_schema");

const addToDo = async (taskDetails) => {
	console.log(taskDetails);
	try {
		const todo = await Task.create(taskDetails);
		await todo.save();
		return true;
	} catch (error) {
		return error;
	}
};

const getToDoList = async (query) => {
	try {
		const todoList = await Task.find(query, { __v: 0 });
		return todoList;
	} catch (error) {
		return error;
	}
};

module.exports = {
	addToDo,
	getToDoList,
};
