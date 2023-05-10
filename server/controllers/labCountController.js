const LabCounts = require("../models/labCountModel");
const mongoose = require("mongoose");

const getTypeOfLabCount = async (req, res) => {
	const user_id = req.user._id;
	const { testName } = req.body;
	LabCounts.find({ testName: testName, user_id: user_id })
		.sort({ dateTaken: 1 })
		.then((labCount) => {
			if (!labCount.length) {
				return res
					.status(404)
					.json({ success: false, error: `LabCount not found` });
			}
			return res.status(200).json({ success: true, data: labCount });
		})
		.catch((err) =>
			res.status(400).json({ success: false, error: err.message })
		);
};

const getAllLabCounts = async (req, res) => {
	const labCounts = await LabCounts.find({}).sort({ createdAt: -1 });
	console.log(labCounts);
	res.status(200).json(labCounts);
};

const getSingleLabCount = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No labCount with id: ${id}`);
	}

	const labCount = await LabCounts.findById(id);

	if (!labCount) {
		return res.status(404).send(`No labCount with id: ${id}`);
	}

	res.status(200).json(labCount);
};

const createLabCount = async (req, res) => {
	console.log(req.body);
	const { testName, count, dateTaken } = req.body;
	const user_id = req.user._id;
	try {
		if (testName === "noselection") {
			res.status(404).json({ mssg: "Select a chart type!" });
		} else {
			const newLabCount = await LabCounts.create({
				testName,
				count,
				dateTaken,
				user_id,
			});
			res.status(200).json({ mssg: "POST a new labCount", newLabCount });
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const deleteLabCount = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No labCount with id: ${id}`);
	}

	const labCount = await LabCounts.findOneAndDelete({ _id: id });

	if (!labCount) {
		return res.status(404).send(`No labCount with id: ${id}`);
	}

	res.status(200).json(labCount);
};

const deleteLatestLabCount = async (req, res) => {
	const user_id = req.user._id;
	const { testName } = req.body;
	console.log(req.body);
	LabCounts.findOneAndDelete(
		{ user_id: user_id, testName: testName },
		{ sort: { createdAt: -1 } }
	)
		.then((doc) => {
			console.log(doc);
			res.status(200).json(doc);
		})
		.catch((err) => {
			console.error(err);
			res.status(400).json({ error: err.message });
		});
};

const updateLabCount = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No labCount with id: ${id}`);
	}

	const updateLabCount = await LabCounts.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!updateLabCount) {
		return res.status(404).send(`No labCount with id: ${id}`);
	}

	res.status(200).json(updateLabCount);
};

module.exports = {
	getAllLabCounts,
	getSingleLabCount,
	createLabCount,
	deleteLabCount,
	updateLabCount,
	getTypeOfLabCount,
	deleteLatestLabCount,
};
