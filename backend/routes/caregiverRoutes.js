const express = require('express');
const router = express.Router();
const {
  getCaregivers,
  getCaregiverById,
  addCaregiver,
  updateCaregiver,
  deleteCaregiver,
  verifyCaregiver
} = require('../controllers/caregiverController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.get('/', getCaregivers);
router.get('/:id', getCaregiverById);
router.post('/', protect, addCaregiver);
router.put('/:id', protect, updateCaregiver);
router.put('/:id/verify', protect, adminOnly, verifyCaregiver);
router.delete('/:id', protect, adminOnly, deleteCaregiver);

module.exports = router;