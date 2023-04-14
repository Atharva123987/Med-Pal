const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
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
		user_id:{
			type:String,
			required:true,
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Appointments", appointmentSchema);
