const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/caregivers', require('./routes/caregiverRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/complaints', require('./routes/complaintRoutes'));

app.get('/', (req, res) => {
  res.json({ message: '🏥 ElderCare API is running!' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => {
  console.error("FULL ERROR:");
  console.error(err);
});