import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    patientName: '',
    patientAge: '',
    medicalNeeds: '',
    serviceType: '',
    duration: '',
    date: '',
    time: '',
    address: '',
    city: '',
    pincode: '',
    phone: '',
  });
  const [booked, setBooked] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.address || !form.city || !form.phone) {
      alert('Please fill all fields');
      return;
    }
    setBooked(true);
  };

  if (booked) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md">
          <p className="text-6xl mb-4">🎉</p>
          <h2 className="text-3xl font-bold text-green-600 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-500 mb-2">Your caregiver has been booked successfully.</p>
          <p className="text-gray-500 mb-6">Service date: <strong>{form.date}</strong></p>
          <div className="bg-teal-50 rounded-xl p-4 mb-6 text-left">
            <p className="font-bold text-teal-700 mb-2">Booking Details:</p>
            <p className="text-sm text-gray-600">Patient: {form.patientName}</p>
            <p className="text-sm text-gray-600">Service: {form.serviceType}</p>
            <p className="text-sm text-gray-600">Duration: {form.duration}</p>
            <p className="text-sm text-gray-600">Address: {form.address}, {form.city}</p>
          </div>
          <button onClick={() => navigate('/dashboard')}
            className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-700">
            Go to Dashboard →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-8">
        <h1 className="text-3xl font-bold mb-2">Book a Caregiver</h1>
        <p className="text-gray-500 mb-8">Fill in the details to book your caregiver</p>

        {/* Progress Steps */}
        <div className="flex items-center mb-8">
          {[1, 2, 3].map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= s ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>{s}</div>
              {i < 2 && <div className={`w-20 h-1 ${step > s ? 'bg-teal-600' : 'bg-gray-200'}`} />}
            </div>
          ))}
          <div className="ml-4 flex gap-8 text-sm font-semibold text-gray-500">
            <span className={step >= 1 ? 'text-teal-600' : ''}>Patient Info</span>
            <span className={step >= 2 ? 'text-teal-600' : ''}>Service</span>
            <span className={step >= 3 ? 'text-teal-600' : ''}>Address</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">

          {/* Step 1 - Patient Info */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-6">Patient Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Patient Name</label>
                  <input type="text" name="patientName" value={form.patientName}
                    onChange={handleChange} placeholder="Enter patient name"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Patient Age</label>
                  <input type="number" name="patientAge" value={form.patientAge}
                    onChange={handleChange} placeholder="Enter age"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Medical Needs / Conditions</label>
                  <textarea name="medicalNeeds" value={form.medicalNeeds}
                    onChange={handleChange} placeholder="Describe medical conditions or special needs..."
                    rows={3}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Contact Phone</label>
                  <input type="tel" name="phone" value={form.phone}
                    onChange={handleChange} placeholder="10-digit mobile number"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>
              <button onClick={() => setStep(2)}
                className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 mt-6">
                Next: Choose Service →
              </button>
            </div>
          )}

          {/* Step 2 - Service */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-6">Service Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Service Type</label>
                  <select name="serviceType" value={form.serviceType} onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  >
                    <option value="">-- Select Service --</option>
                    <option>Nursing Care</option>
                    <option>Elderly Attendant</option>
                    <option>Physiotherapy</option>
                    <option>Post-Hospital Care</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Duration</label>
                  <select name="duration" value={form.duration} onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  >
                    <option value="">-- Select Duration --</option>
                    <option>Hourly (4 hrs)</option>
                    <option>Daily (8 hrs)</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Preferred Date</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Preferred Time</label>
                  <input type="time" name="time" value={form.time} onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={() => setStep(1)}
                  className="w-full bg-gray-200 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-300">
                  ← Back
                </button>
                <button onClick={() => setStep(3)}
                  className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700">
                  Next: Address →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 - Address */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-6">Service Address</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Full Address</label>
                  <textarea name="address" value={form.address} onChange={handleChange}
                    placeholder="House/Flat No, Street, Area"
                    rows={2}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-600 font-semibold mb-2">City</label>
                    <input type="text" name="city" value={form.city} onChange={handleChange}
                      placeholder="e.g. Mumbai"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-semibold mb-2">Pincode</label>
                    <input type="text" name="pincode" value={form.pincode} onChange={handleChange}
                      placeholder="6-digit pincode"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={() => setStep(2)}
                  className="w-full bg-gray-200 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-300">
                  ← Back
                </button>
                <button onClick={handleSubmit}
                  className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700">
                  Confirm Booking →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingPage;