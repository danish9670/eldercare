const express = require('express');
const router = express.Router();
const {
  createBooking,
  getAllBookings,
  getUserBookings,
  updateBookingStatus,
  cancelBooking,
  deleteBooking
} = require('../controllers/bookingController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.post('/', protect, createBooking);
router.get('/', protect, adminOnly, getAllBookings);
router.get('/user/:userId', protect, getUserBookings);
router.put('/:id', protect, updateBookingStatus);
router.put('/:id/cancel', protect, cancelBooking);
router.delete('/:id', protect, adminOnly, deleteBooking);

module.exports = router;