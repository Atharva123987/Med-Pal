const express = require("express");

// controller functions
const {
	loginUser,
	signupUser,
	getUserDetailsWithId,
} = require("../controllers/userController");
const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/register", signupUser);

// get user details with id
router.get("/:id", getUserDetailsWithId);

module.exports = router;
