// const ReportStore = require("../models/reportsStoreModel");
// const mongoose = require("mongoose");
// const { Storage } = require("@google-cloud/storage");

// // create a new instance of the GCP Storage client
// const storage = new Storage({
// 	projectId: "medpal-382613",
// 	keyFilename: "../keys/medpal-382613-6b0b0e1e6b0f.json",
// });

// const getSingleReport = async (req, res) => {};

// const createReport = async (req, res) => {
// 	try {
// 		const file = req.file;
// 		console.log("file:", file); // Add this line
// 		const bucketName = "medpal-reports-bucket";
// 		const fileName = `${Date.now()}_${file.originalname}`;
// 		const contentType = file.mimetype;

// 		// create a write stream to upload the file to GCP CDN
// 		const bucket = storage.bucket(bucketName);
// 		const fileUploadStream = bucket.file(fileName).createWriteStream({
// 			metadata: { contentType },
// 			resumable: false,
// 		});
// 		// pipe the file to the write stream and wait for it to finish uploading
// 		await new Promise((resolve, reject) => {
// 			console.log("file:", file);
// 			console.log("file.stream:", file.stream);

// 			file.stream
// 				.pipe(fileUploadStream)
// 				.on("error", reject)
// 				.on("finish", resolve);
// 		});

// 		// construct the file URL
// 		const fileUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;

// 		// save the file name and URL in MongoDB using Mongoose
// 		const reportStore = new ReportStore({
// 			fileName: file.originalname,
// 			fileUrl,
// 		});
// 		await reportStore.save();

// 		// send the file URL back to the client
// 		res.json({ fileUrl });
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).send("Server error");
// 	}
// };

// module.exports = {
// 	getSingleReport,
// 	createReport,
// };

const ReportStore = require("../models/reportsStoreModel");
const mongoose = require("mongoose");
const { Storage } = require("@google-cloud/storage");
const fs = require("fs");

// create a new instance of the GCP Storage client
const storage = new Storage({
	projectId: "medpal-382613",
	keyFilename: "../server/keys/medpal-382613-6c9ca6a08ea6.json",
});

const getSingleReport = async (req, res) => {};

const createReport = async (req, res) => {
	try {
		const file = req.file;
		console.log("file:", file); // Add this line
		const bucketName = "medpal-reports-bucket";
		const fileName = `${Date.now()}_${file.originalname}`;
		const contentType = file.mimetype;

		// create a write stream to upload the file to GCP CDN
		const bucket = storage.bucket(bucketName);
		const fileUploadStream = bucket.file(fileName).createWriteStream({
			metadata: { contentType },
			resumable: false,
		});

		// wrap the code block inside a Promise constructor
		await new Promise((resolve, reject) => {
			const fileStream = fs.createReadStream(file.path);

			fileStream
				.pipe(fileUploadStream)
				.on("error", reject)
				.on("finish", resolve);
		});

		// construct the file URL
		const fileUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;

		const user_id = req.user._id;

		// save the file name and URL in MongoDB using Mongoose
		const reportStore = new ReportStore({
			reportName: file.originalname,
			reportResourceURL: fileUrl,
			user_id,
		});
		await reportStore.save();

		// send the file URL back to the client
		res.json({ fileUrl });
	} catch (error) {
		console.error(error);
		res.status(500).send("Server error");
	}
};

module.exports = {
	getSingleReport,
	createReport,
};
