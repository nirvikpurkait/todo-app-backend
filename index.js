require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./database/connectDB");

const port = process.env.PORT || 80;

connectDB().then(() => {
	app.listen(port, () => {
		console.log(`App running on port ${port}`);
	});
});
