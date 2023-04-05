const express = require("express");
const {
	getAllLabCounts,
	getSingleLabCount,
	createLabCount,
	deleteLabCount,
	updateLabCount,
} = require("../controllers/labCountController");

const router = express.Router();

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
