const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorsSchema = new Schema({
	doctorName: {
		type: String,
		required: true,
	},
	speciality: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
	},
	clinicOrHospitalName: {
		type: String,
		required: true,
	},
	addressLine1: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	district: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	fees: {
		type: Number,
		required: true,
	},
	location: {
		type: {
			type: String,
			enum: ["Point"],
			required: true,
		},
		coordinates: {
			type: [Number],
			required: true,
		},
	},
});

doctorsSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Doctors", doctorsSchema);
