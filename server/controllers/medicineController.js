const Medicines = require("../models/medicineModel");
const mongoose = require("mongoose");

const getAllMedicines = async (req, res) => {
	const user_id = req.user._id;
	const medicines = await Medicines.find({user_id}).sort({ createdAt: -1 });
	// console.log(medicines);
	res.status(200).json(medicines);
};

const getSingleMedicine = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No medicine with id: ${id}`);
	}

	const medicine = await Medicines.findById(id);

	if (!medicine) {
		return res.status(404).send(`No medicine with id: ${id}`);
	}

	res.status(200).json(medicine);
};



const createMedicine = async (req, res) => {
	const user_id = req.user._id;
	console.log(user_id);
	const { name, quantity, expiry, frequency, timeOfDay, dosageEndDate } =
		req.body;
	try {
		const newMedicine = await Medicines.create({
			name,
			quantity,
			expiry,
			frequency,
			timeOfDay,
			dosageEndDate,
			user_id,

		});
		res.status(200).json({ mssg: "POST a new medicine", newMedicine });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const deleteMedicine = async (req, res) => {
	const { id } = req.params;
	
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No medicine with id: ${id}`);
	}

	const medicine = await Medicines.findOneAndDelete({ _id: id });

	if (!medicine) {
		return res.status(404).send(`No medicine with id: ${id}`);
	}

	res.status(200).json(medicine);
};

const updateMedicine = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No medicine with id: ${id}`);
	}

	const medicine = await Medicines.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!medicine) {
		return res.status(404).send(`No medicine with id: ${id}`);
	}

	res.status(200).json(medicine);
};

module.exports = {
	createMedicine,
	getAllMedicines,
	getSingleMedicine,
	deleteMedicine,
	updateMedicine,
};
