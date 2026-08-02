const express = require('express');
const router = express.Router();
const {
  createComplaint,
  getAllComplaints,
  getUserComplaints,
  updateComplaintStatus
} = require('../controllers/complaintController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.post('/', protect, createComplaint);
router.get('/', protect, adminOnly, getAllComplaints);
router.get('/user/:userId', protect, getUserComplaints);
router.put('/:id', protect, adminOnly, updateComplaintStatus);

module.exports = router;