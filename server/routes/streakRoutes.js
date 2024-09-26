const express = require("express");
const {
	getUserStreak,
	incrementUserStreak,
	resetUserStreak,
} = require("../controllers/streakController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// POST reset user streak
router.post("/reset/:id", resetUserStreak);

// require auth for rest of the streak routes
router.use(requireAuth);

// GET user streak
router.get("/", getUserStreak);

// POST increment user streak
router.post("/increment", incrementUserStreak);

module.exports = router;
