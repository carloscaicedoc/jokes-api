const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Right On! We are ready to Rock & Roll!"))
	.catch(err => console.log("Something went wrong when connecting to the Mongo database", err));