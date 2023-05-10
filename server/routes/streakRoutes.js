const express = require("express");
const {
	getUserStreak,
	incrementUserStreak,
	resetUserStreak,
} = require("../controllers/streakController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all streak routes
router.use(requireAuth);

// GET user streak
router.get("/", getUserStreak);

// POST increment user streak
router.post("/increment", incrementUserStreak);

// POST reset user streak
router.post("/reset", resetUserStreak);

module.exports = router;
