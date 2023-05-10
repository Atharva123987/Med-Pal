const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportStoreSchema = new Schema(
	{
		reportName: {
			type: String,
			required: true,
		},
		reportResourceURL: {
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

module.exports = mongoose.model("ReportStore", reportStoreSchema);
