const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userName: { type: String },
  caregiver: { type: String, required: true },
  issue: { type: String, required: true },
  status: { type: String, default: 'Pending', enum: ['Pending', 'Resolved', 'Rejected'] },
}, { timestamps: true });

module.exports = mongoose.model('Complaint', complaintSchema);