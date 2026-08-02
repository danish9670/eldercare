const Complaint = require('../models/Complaint');

// Create complaint
const createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);
    res.status(201).json({
      message: 'Complaint submitted successfully',
      complaint
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all complaints (admin)
const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate('user', 'name email')
      .sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get user complaints
const getUserComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.params.userId })
      .sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update complaint status (admin)
const updateComplaintStatus = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    res.json({ message: 'Complaint status updated', complaint });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createComplaint,
  getAllComplaints,
  getUserComplaints,
  updateComplaintStatus
};