const Caregiver = require('../models/Caregiver');

// Get all caregivers
const getCaregivers = async (req, res) => {
  try {
    const { role, location, search, available } = req.query;
    let query = {};

    if (role) query.role = { $regex: role, $options: 'i' };
    if (location) query.location = { $regex: location, $options: 'i' };
    if (search) query.name = { $regex: search, $options: 'i' };
    if (available) query.available = available === 'true';

    const caregivers = await Caregiver.find(query).sort({ rating: -1 });
    res.json(caregivers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single caregiver
const getCaregiverById = async (req, res) => {
  try {
    const caregiver = await Caregiver.findById(req.params.id);
    if (!caregiver) {
      return res.status(404).json({ message: 'Caregiver not found' });
    }
    res.json(caregiver);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add caregiver
const addCaregiver = async (req, res) => {
  try {
    const caregiver = await Caregiver.create(req.body);
    res.status(201).json({
      message: 'Caregiver added successfully',
      caregiver
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update caregiver
const updateCaregiver = async (req, res) => {
  try {
    const caregiver = await Caregiver.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!caregiver) {
      return res.status(404).json({ message: 'Caregiver not found' });
    }
    res.json({ message: 'Caregiver updated', caregiver });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete caregiver
const deleteCaregiver = async (req, res) => {
  try {
    await Caregiver.findByIdAndDelete(req.params.id);
    res.json({ message: 'Caregiver removed successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Verify caregiver (admin)
const verifyCaregiver = async (req, res) => {
  try {
    const caregiver = await Caregiver.findByIdAndUpdate(
      req.params.id,
      { status: 'Verified' },
      { new: true }
    );
    res.json({ message: 'Caregiver verified!', caregiver });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCaregivers,
  getCaregiverById,
  addCaregiver,
  updateCaregiver,
  deleteCaregiver,
  verifyCaregiver
};