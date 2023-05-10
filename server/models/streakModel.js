const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const streakSchema = new Schema(
	{
		currentStreak: {
			type: Number,
			required: true,
		},
		user_id: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Streak", streakSchema);
