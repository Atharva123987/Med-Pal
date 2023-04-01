const express = require("express");
const Medicine = require("../models/medicinesModel");

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
router.post("/", async (req, res) => {
	const { name, quantity, expiry, frequency, timeOfDay, dosageEndDate } =
		req.body;
	try {
		const newMedicine = await Medicine.create({
			name,
			quantity,
			expiry,
			frequency,
			timeOfDay,
			dosageEndDate,
		});
		res.status(200).json({ mssg: "POST a new medicine", newMedicine });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
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
