const express = require("express");
const {
	getAllAppointments,
	getSingleAppointment,
	createAppointment,
	deleteAppointment,
	updateAppointment,
} = require("../controllers/appointmentController");

const router = express.Router();

// GET all appointments
router.get("/", getAllAppointments);

// GET a single appointment
router.get("/:id", getSingleAppointment);

// POST a new appointment
router.post("/", createAppointment);

// DELETE an appointment
router.delete("/:id", deleteAppointment);

// UPDATE an appointment
router.patch("/:id", updateAppointment);

module.exports = router;
