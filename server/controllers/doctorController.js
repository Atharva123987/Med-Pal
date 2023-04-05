const Doctors = require("../models/doctorModel");
const mongoose = require("mongoose");

const NodeGeocoder = require("node-geocoder");

const geocoder = NodeGeocoder({
	provider: "openstreetmap",
});

const getAllDoctors = async (req, res) => {
	const doctors = await Doctors.find({}).sort({ createdAt: -1 });
	console.log(doctors);
	res.status(200).json(doctors);
};

const getSingleDoctor = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No doctor with id: ${id}`);
	}

	const doctor = await Doctors.findById(id);

	if (!doctor) {
		return res.status(404).send(`No doctor with id: ${id}`);
	}

	res.status(200).json(doctor);
};

const createDoctor = async (req, res) => {
	console.log(req.body);
	const {
		doctorName,
		speciality,
		phoneNumber,
		clinicOrHospitalName,
		address,
		fees,
	} = req.body;
	try {
		const result = await geocoder.geocode(address);
		console.log(result);
		if (result.length === 0 || !result) {
			return res.status(404).send("Could not geocode");
		} else {
			const { latitude, longitude } = result[0];
			const location = {
				type: "Point",
				coordinates: [longitude, latitude],
			};
			const newDoctor = new Doctors({
				doctorName,
				speciality,
				phoneNumber,
				clinicOrHospitalName,
				address,
				fees,
				location,
			});
			console.log(newDoctor);
			// save the new doctor to the database
			await newDoctor.save();
			res.status(201).json(newDoctor);
		}
	} catch (err) {
		console.log("Catch");
		return res.status(404).send({ message: err.message });
	}
};

const deleteDoctor = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No doctor with id: ${id}`);
	}

	const doctor = await Doctors.findOneAndDelete({ _id: id });

	if (!doctor) {
		return res.status(404).send(`No doctor with id: ${id}`);
	}

	res.status(200).json(doctor);
};

const updateDoctor = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No doctor with id: ${id}`);
	}

	const doctor = await Doctors.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!doctor) {
		return res.status(404).send(`No doctor with id: ${id}`);
	}

	res.status(200).json(doctor);
};

module.exports = {
	getAllDoctors,
	getSingleDoctor,
	createDoctor,
	deleteDoctor,
	updateDoctor,
};
