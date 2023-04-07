const express = require("express");
const {
	getAllDoctors,
	getSingleDoctor,
	createDoctor,
	deleteDoctor,
	updateDoctor,
	getNearbyDoctors,
} = require("../controllers/doctorController");

const router = express.Router();

// GET all doctors
router.get("/", getAllDoctors);

// GET nearby doctors
router.post("/nearby", getNearbyDoctors);

// GET a single doctor
router.get("/:id", getSingleDoctor);

// POST a new doctor
router.post("/", createDoctor);

// DELETE a doctor
router.delete("/:id", deleteDoctor);

// UPDATE a doctor
router.patch("/:id", updateDoctor);

module.exports = router;
