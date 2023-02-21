const express = require("express");
const app = express();

app.get("/login", (req, res) => {
	res.send("Login attempted");
});

app.get("/register", (req, res) => {
	res.send("Registration attempted");
});

app.listen(1337, () => {
	console.log("Example app listening on port 1337!");
});
