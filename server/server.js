//require dotenv to read .env variables into Node
require("dotenv").config();

//require express to create and configure our HTTP server
const express = require("express");
const app = express();

//require mongoose to connect to our MongoDB database
const mongoose = require("mongoose");

const medicineRoutes = require("./routes/medicinesRoutes");

// middleware
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use("/api/medicines", medicineRoutes);

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("connected to database");
		// listen to port
		app.listen(process.env.PORT, () => {
			console.log("listening for requests on port", process.env.PORT);
		});
	})
	.catch((err) => {
		console.log(err);
	});
