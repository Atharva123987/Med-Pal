const Logs = require("../models/logModel");
const mongoose = require("mongoose");

const getAllLogs = async (req, res) => {
	const user_id = req.user._id;
	const logs = await Logs.find({ user_id }).sort({ createdAt: -1 });
	// console.log(logs);
	res.status(200).json(logs);
};

const createLog = async (req, res) => {
	const user_id = req.user._id;
	const { content } = req.body;
	try {
		const newLog = await Logs.create({
			content,
			user_id,
		});
		res.status(200).json({ mssg: "POST a new log", newLog });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

module.exports = { getAllLogs, createLog };
