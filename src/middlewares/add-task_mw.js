const { addToDo } = require("../../database/schema-action/task-schema_acts");

const addToDoToDB = async (req, res, next) => {
	let todo = req.body;

	try {
		const added = await addToDo(todo);
		if (!(added instanceof Error)) {
			res.body = {};
			next();
		} else {
			throw new Error(added.message);
		}
	} catch (error) {
		next(error);
	}
};

module.exports = {
	addToDoToDB,
};
