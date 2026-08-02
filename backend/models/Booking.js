const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  caregiver: { type: mongoose.Schema.Types.ObjectId, ref: 'Caregiver' },
  patientName: { type: String, required: true },
  patientAge: { type: Number, required: true },
  medicalNeeds: { type: String },
  serviceType: { type: String, required: true },
  duration: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String },
  address: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String },
  phone: { type: String, required: true },
  amount: { type: Number },
  status: { type: String, default: 'Upcoming', enum: ['Upcoming', 'Active', 'Completed', 'Cancelled'] },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);