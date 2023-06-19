const errorMw = (err, req, res, next) => {
	console.log(err.message);
	res.body = {
		status: `failed`,
		...res.body,
	};

	res.send();
};

module.exports = {
	errorMw,
};
