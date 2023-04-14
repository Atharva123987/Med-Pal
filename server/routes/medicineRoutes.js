const express = require("express");
const {
	getAllMedicines,
	getSingleMedicine,
	createMedicine,
	deleteMedicine,
	updateMedicine,
} = require("../controllers/medicineController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all medicines
router.get("/", getAllMedicines);

// GET a single medicine
router.get("/:id", getSingleMedicine);

// POST a new medicine
router.post("/", createMedicine);

// DELETE a medicine
router.delete("/:id", deleteMedicine);

// UPDATE a medicine
router.patch("/:id", updateMedicine);

module.exports = router;
