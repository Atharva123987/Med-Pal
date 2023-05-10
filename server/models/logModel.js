const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logSchema = new Schema(
	{
		content: {
			type: String,
			required: true,
		},
		user_id: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Log", logSchema);
