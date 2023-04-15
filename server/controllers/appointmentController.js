const Appointments = require("../models/appointmentModel");
const mongoose = require("mongoose");

const getAllAppointments = async (req, res) => {
	const user_id = req.user._id;
	const appointments = await Appointments.find({ user_id: user_id }).sort({
		createdAt: -1,
	});
	console.log(appointments);
	res.status(200).json(appointments);
};

const getSingleAppointment = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No appointment with id: ${id}`);
	}

	const appointment = await Appointments.findById(id);

	if (!appointment) {
		return res.status(404).send(`No appointment with id: ${id}`);
	}

	res.status(200).json(appointment);
};

const createAppointment = async (req, res) => {
	console.log(req.body);
	const { doctorName, phoneNumber, address, timeAndDate, notes } = req.body;
	const user_id = req.user._id;
	try {
		const newAppointment = await Appointments.create({
			doctorName,
			phoneNumber,
			address,
			timeAndDate,
			notes,
			user_id,
		});
		res.status(200).json({
			mssg: "POST a new appointment",
			newAppointment,
		});
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const deleteAppointment = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No appointment with id: ${id}`);
	}

	const appointment = await Appointments.findOneAndDelete({ _id: id });

	if (!appointment) {
		return res.status(404).send(`No appointment with id: ${id}`);
	}

	res.status(200).json(appointment);
};

const updateAppointment = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No appointment with id: ${id}`);
	}

	const appointment = await Appointments.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!appointment) {
		return res.status(404).send(`No appointment with id: ${id}`);
	}

	res.status(200).json(appointment);
};

module.exports = {
	getAllAppointments,
	getSingleAppointment,
	createAppointment,
	deleteAppointment,
	updateAppointment,
};
