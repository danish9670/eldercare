import { useState } from 'react';
import { Link } from 'react-router-dom';

function DashboardPage() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [maintenanceForm, setMaintenanceForm] = useState({ caregiver: '', issue: '', submitted: false });

  const user = JSON.parse(localStorage.getItem('user') || '{"name":"Danish Raza"}');

  const bookings = [
    { id: '#BK001', caregiver: 'Dr. Priya Sharma', service: 'Nursing Care', date: '2025-06-10', time: '9:00 AM', status: 'Active', amount: 600 },
    { id: '#BK002', caregiver: 'Rahul Verma', service: 'Elderly Attendant', date: '2025-06-15', time: '8:00 AM', status: 'Upcoming', amount: 350 },
    { id: '#BK003', caregiver: 'Dr. Anjali Singh', service: 'Physiotherapy', date: '2025-05-20', time: '10:00 AM', status: 'Completed', amount: 900 },
  ];

  const handleComplaint = () => {
    if (!maintenanceForm.caregiver || !maintenanceForm.issue) {
      alert('Please fill all fields');
      return;
    }
    setMaintenanceForm({ ...maintenanceForm, submitted: true });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">👤 My Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, {user.name}!</p>
          </div>
          <div className="flex gap-3">
            <Link to="/patients"
              className="bg-white border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-xl font-bold hover:bg-teal-50">
              👤 Patient Profiles
            </Link>
            <Link to="/booking/1"
              className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700">
              + Book New Service
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Bookings', value: '1', color: 'teal', icon: '📅' },
            { label: 'Upcoming', value: '1', color: 'blue', icon: '🔜' },
            { label: 'Completed', value: '1', color: 'green', icon: '✅' },
            { label: 'Total Spent', value: '₹1850', color: 'purple', icon: '💳' },
          ].map((stat, i) => (
            <div key={i} className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 border-${stat.color}-500`}>
              <p className="text-3xl mb-1">{stat.icon}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { key: 'bookings', label: '📅 My Bookings' },
            { key: 'history', label: '📋 Service History' },
            { key: 'complaint', label: '🔔 Raise Complaint' },
          ].map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-xl font-bold transition ${
                activeTab === tab.key
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-4">
            {bookings.filter(b => b.status !== 'Completed').map(booking => (
              <div key={booking.id} className="bg-white rounded-2xl p-6 shadow-sm flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">{booking.caregiver}</h3>
                  <p className="text-gray-500">{booking.service}</p>
                  <p className="text-gray-400 text-sm">📅 {booking.date} at {booking.time}</p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    booking.status === 'Active'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {booking.status}
                  </span>
                  <p className="text-teal-600 font-bold text-xl mt-2">₹{booking.amount}/hr</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  {['Booking ID', 'Caregiver', 'Service', 'Date', 'Amount', 'Status'].map(h => (
                    <th key={h} className="text-left p-4 font-semibold text-gray-600">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookings.map(booking => (
                  <tr key={booking.id} className="border-t hover:bg-gray-50">
                    <td className="p-4 font-bold text-teal-600">{booking.id}</td>
                    <td className="p-4">{booking.caregiver}</td>
                    <td className="p-4 text-gray-500">{booking.service}</td>
                    <td className="p-4 text-gray-500">{booking.date}</td>
                    <td className="p-4 font-bold text-teal-600">₹{booking.amount}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        booking.status === 'Active' ? 'bg-green-100 text-green-600' :
                        booking.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Complaint Tab */}
        {activeTab === 'complaint' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-lg">
            {maintenanceForm.submitted ? (
              <div className="text-center py-8">
                <p className="text-5xl mb-4">✅</p>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Complaint Submitted!</h3>
                <p className="text-gray-500">Our team will contact you within 24 hours.</p>
                <button onClick={() => setMaintenanceForm({ caregiver: '', issue: '', submitted: false })}
                  className="mt-6 text-teal-600 font-bold hover:underline">
                  Submit another complaint
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-6">🔔 Raise a Complaint</h2>
                <div className="mb-4">
                  <label className="block text-gray-600 font-semibold mb-2">Select Caregiver</label>
                  <select value={maintenanceForm.caregiver}
                    onChange={e => setMaintenanceForm({...maintenanceForm, caregiver: e.target.value})}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500">
                    <option value="">-- Select Caregiver --</option>
                    <option>Dr. Priya Sharma</option>
                    <option>Rahul Verma</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-600 font-semibold mb-2">Describe the Issue</label>
                  <textarea value={maintenanceForm.issue}
                    onChange={e => setMaintenanceForm({...maintenanceForm, issue: e.target.value})}
                    placeholder="Describe your complaint in detail..."
                    rows={4}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <button onClick={handleComplaint}
                  className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition">
                  Submit Complaint →
                </button>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default DashboardPage;