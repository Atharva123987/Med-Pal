const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentsSchema = new Schema(
	{
		doctorName: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: Number,
		},
		address: {
			type: String,
		},
		timeAndDate: {
			type: Date,
			required: true,
		},
		notes: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Appointments", appointmentsSchema);
