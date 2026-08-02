const mongoose = require('mongoose');

const caregiverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  specialization: { type: [String], default: [] },
  qualification: { type: String },
  rating: { type: Number, default: 4.5 },
  reviews: { type: Number, default: 0 },
  available: { type: Boolean, default: true },
  status: { type: String, default: 'Pending', enum: ['Pending', 'Verified', 'Rejected'] },
  image: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Caregiver', caregiverSchema);