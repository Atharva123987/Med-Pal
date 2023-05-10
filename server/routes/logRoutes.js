const express = require("express");
const { getAllLogs, createLog } = require("../controllers/logController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all logs
router.get("/", getAllLogs);

// POST a new log
router.post("/", createLog);

module.exports = router;
