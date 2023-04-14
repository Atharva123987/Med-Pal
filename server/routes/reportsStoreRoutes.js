const express = require("express");
const multer = require("multer");
const {
	getListOfReports,
	createReport,
} = require("../controllers/reportsStoreController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all report routes
router.use(requireAuth);

const upload = multer({ dest: "uploads/" });

// GET certain report
router.get("/", getListOfReports);

// POST a new report
router.post("/", upload.single("file"), createReport);

module.exports = router;
