const express = require("express");

const router = express.Router();

// GET all medicines
router.get("/", (req, res) => {
	res.json({ mssg: "GET all medicines" });
});

// GET a single medicine
router.get("/:id", (req, res) => {
	res.json({ mssg: "GET a single medicine" });
});

// POST a new medicine
router.post("/", (req, res) => {
	res.json({ mssg: "POST a new medicine" });
});

// DELETE a medicine
router.delete("/:id", (req, res) => {
	res.json({ mssg: "DELETE a medicine" });
});

// UPDATE a medicine
router.patch("/:id", (req, res) => {
	res.json({ mssg: "UPDATE a medicine" });
});

module.exports = router;
