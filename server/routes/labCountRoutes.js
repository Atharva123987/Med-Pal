const express = require("express");
const {
	getAllLabCounts,
	getSingleLabCount,
	createLabCount,
	deleteLabCount,
	updateLabCount,
	getTypeOfLabCount,
	deleteLatestLabCount,
} = require("../controllers/labCountController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET type of labCount
router.post("/type", getTypeOfLabCount);

// GET all labCounts
router.get("/", getAllLabCounts);

// GET a single labCount
router.get("/:id", getSingleLabCount);

// POST a new labCount
router.post("/", createLabCount);

// DELETE a labCount
router.delete("/delete/:id", deleteLabCount);

//DELETE latest labCount
router.delete("/latest", deleteLatestLabCount);

// UPDATE a labCount
router.patch("/:id", updateLabCount);

module.exports = router;
