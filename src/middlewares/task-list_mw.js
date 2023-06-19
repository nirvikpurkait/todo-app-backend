const {
	getToDoList,
} = require("../../database/schema-action/task-schema_acts");

const getTaskListFromDB = async (req, res, next) => {
	try {
		const taskList = await getToDoList();
		if (!(taskList instanceof Error)) {
			res.body = { taskList };
			next();
		} else {
			throw new Error(taskList.message);
		}
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getTaskListFromDB,
};
