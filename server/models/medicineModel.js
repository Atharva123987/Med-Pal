const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const medicinesSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		expiry: {
			type: Date,
			required: true,
		},
		frequency: {
			type: String,
		},
		timeOfDay: {
			morning: {
				yesOrNot: Boolean,
				beforeFood: Boolean,
			},
			afternoon: {
				yesOrNot: Boolean,
				beforeFood: Boolean,
			},
			evening: {
				yesOrNot: Boolean,
				beforeFood: Boolean,
			},
			night: {
				yesOrNot: Boolean,
				beforeFood: Boolean,
			},
		},
		dosageEndDate: {
			type: Date,
		},
		user_id:{
			type:String,
			required:true,
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Medicines", medicinesSchema);
