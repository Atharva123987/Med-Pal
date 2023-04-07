const express = require("express");
const {
	getAllLabCounts,
	getSingleLabCount,
	createLabCount,
	deleteLabCount,
	updateLabCount,
	getTypeOfLabCount,
} = require("../controllers/labCountController");

const router = express.Router();

// GET type of labCount
router.post("/type", getTypeOfLabCount);

// GET all labCounts
router.get("/", getAllLabCounts);

// GET a single labCount
router.get("/:id", getSingleLabCount);

// POST a new labCount
router.post("/", createLabCount);

// DELETE a labCount
router.delete("/:id", deleteLabCount);

// UPDATE a labCount
router.patch("/:id", updateLabCount);

module.exports = router;
