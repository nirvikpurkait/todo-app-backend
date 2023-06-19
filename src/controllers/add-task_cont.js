const addTaskCont = (req, res) => {
	res.body = {
		status: `success`,
		...res.body,
	};

	res.send(res.body);
};

module.exports = {
	addTaskCont,
};
