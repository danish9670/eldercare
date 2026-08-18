import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const initialCaregivers = [
  { id: 1, name: 'Dr. Priya Sharma', role: 'Registered Nurse', location: 'Delhi NCR', status: 'Verified', rating: 4.9 },
  { id: 2, name: 'Rahul Verma', role: 'Elderly Attendant', location: 'Mumbai', status: 'Verified', rating: 4.7 },
  { id: 3, name: 'Dr. Anjali Singh', role: 'Physiotherapist', location: 'Bangalore', status: 'Pending', rating: 4.8 },
  { id: 4, name: 'Mohammed Khan', role: 'Specialized Nurse', location: 'Hyderabad', status: 'Verified', rating: 4.6 },
  { id: 5, name: 'Sunita Patel', role: 'Elderly Attendant', location: 'Ahmedabad', status: 'Pending', rating: 4.5 },
];

const bookings = [
  { id: '#BK001', user: 'Danish Raza', caregiver: 'Dr. Priya Sharma', service: 'Nursing Care', date: '2025-06-10', status: 'Active', amount: 600 },
  { id: '#BK002', user: 'Priya Gupta', caregiver: 'Rahul Verma', service: 'Elderly Attendant', date: '2025-06-15', status: 'Upcoming', amount: 350 },
  { id: '#BK003', user: 'Rahul Singh', caregiver: 'Dr. Vikram Nair', service: 'Physiotherapy', date: '2025-05-20', status: 'Completed', amount: 900 },
  { id: '#BK004', user: 'Ayesha Khan', caregiver: 'Dr. Priya Sharma', service: 'Post-Hospital Care', date: '2025-06-01', status: 'Active', amount: 1000 },
];

const complaints = [
  { id: 1, user: 'Danish Raza', caregiver: 'Rahul Verma', issue: 'Caregiver arrived late', date: '2025-06-05', status: 'Pending' },
  { id: 2, user: 'Priya Gupta', caregiver: 'Dr. Anjali Singh', issue: 'Session was shorter than expected', date: '2025-06-03', status: 'Resolved' },
];

const monthlyData = [
  { month: 'Jan', bookings: 45, revenue: 32000 },
  { month: 'Feb', bookings: 52, revenue: 38000 },
  { month: 'Mar', bookings: 61, revenue: 45000 },
  { month: 'Apr', bookings: 58, revenue: 42000 },
  { month: 'May', bookings: 75, revenue: 56000 },
  { month: 'Jun', bookings: 89, revenue: 67000 },
];

const serviceData = [
  { name: 'Nursing Care', value: 35 },
  { name: 'Elderly Attendant', value: 28 },
  { name: 'Physiotherapy', value: 22 },
  { name: 'Post-Hospital', value: 15 },
];

const COLORS = ['#0d9488', '#0891b2', '#7c3aed', '#db2777'];

function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [caregivers, setCaregivers] = useState(initialCaregivers);

  const totalRevenue = bookings.reduce((sum, b) => sum + b.amount, 0);
  const activeBookings = bookings.filter(b => b.status === 'Active').length;
  const pendingCaregivers = caregivers.filter(c => c.status === 'Pending').length;
  const pendingComplaints = complaints.filter(c => c.status === 'Pending').length;

  const verifyCaregiver = (id) => {
    setCaregivers(caregivers.map(c =>
      c.id === id ? { ...c, status: 'Verified' } : c
    ));
  };

  const deleteCaregiver = (id) => {
    setCaregivers(caregivers.filter(c => c.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Admin Header */}
      <div className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏥</span>
          <span className="text-xl font-bold">ElderCare Admin</span>
        </div>
        <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">● Admin Online</span>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8">

        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { key: 'overview', label: '📊 Overview' },
            { key: 'analytics', label: '📈 Analytics' },
            { key: 'caregivers', label: '👩‍⚕️ Caregivers' },
            { key: 'bookings', label: '📅 Bookings' },
            { key: 'complaints', label: '🔔 Complaints' },
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

        {/* Overview */}
        {activeTab === 'overview' && (
          <div>
            <div className="grid grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Total Revenue', value: `₹${totalRevenue}`, icon: '💰', color: 'green' },
                { label: 'Active Bookings', value: activeBookings, icon: '📅', color: 'teal' },
                { label: 'Pending Caregivers', value: pendingCaregivers, icon: '👩‍⚕️', color: 'yellow' },
                { label: 'Pending Complaints', value: pendingComplaints, icon: '🔔', color: 'red' },
              ].map((stat, i) => (
                <div key={i} className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 border-${stat.color}-500`}>
                  <p className="text-3xl mb-2">{stat.icon}</p>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Recent Bookings</h2>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    {['Booking ID', 'User', 'Caregiver', 'Service', 'Date', 'Amount', 'Status'].map(h => (
                      <th key={h} className="text-left p-4 font-semibold text-gray-600">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(b => (
                    <tr key={b.id} className="border-t hover:bg-gray-50">
                      <td className="p-4 font-bold text-teal-600">{b.id}</td>
                      <td className="p-4">{b.user}</td>
                      <td className="p-4">{b.caregiver}</td>
                      <td className="p-4 text-gray-500">{b.service}</td>
                      <td className="p-4 text-gray-500">{b.date}</td>
                      <td className="p-4 font-bold">₹{b.amount}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          b.status === 'Active' ? 'bg-green-100 text-green-600' :
                          b.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>{b.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">

            {/* Monthly Bookings Chart */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6">📈 Monthly Bookings</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="bookings" stroke="#0d9488" strokeWidth={3} dot={{ fill: '#0d9488' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Revenue Chart */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6">💰 Monthly Revenue (₹)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#0d9488" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Service Distribution */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6">🏥 Service Distribution</h2>
              <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={serviceData} cx="50%" cy="50%" outerRadius={100}
                      dataKey="value" label={({ name, value }) => `${name}: ${value}%`}>
                      {serviceData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Avg Response Time', value: '< 2 hrs', icon: '⚡', color: 'yellow' },
                { label: 'Completion Rate', value: '94%', icon: '✅', color: 'green' },
                { label: 'Customer Satisfaction', value: '4.9/5', icon: '⭐', color: 'teal' },
              ].map((kpi, i) => (
                <div key={i} className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 border-${kpi.color}-500 text-center`}>
                  <p className="text-4xl mb-2">{kpi.icon}</p>
                  <p className="text-3xl font-bold text-gray-800">{kpi.value}</p>
                  <p className="text-gray-500">{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Caregivers */}
        {activeTab === 'caregivers' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">Manage Caregivers</h2>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  {['Name', 'Role', 'Location', 'Rating', 'Status', 'Actions'].map(h => (
                    <th key={h} className="text-left p-4 font-semibold text-gray-600">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {caregivers.map(c => (
                  <tr key={c.id} className="border-t hover:bg-gray-50">
                    <td className="p-4 font-bold">{c.name}</td>
                    <td className="p-4 text-gray-500">{c.role}</td>
                    <td className="p-4 text-gray-500">📍 {c.location}</td>
                    <td className="p-4">⭐ {c.rating}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        c.status === 'Verified'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-yellow-100 text-yellow-600'
                      }`}>{c.status}</span>
                    </td>
                    <td className="p-4 flex gap-2">
                      {c.status === 'Pending' && (
                        <button onClick={() => verifyCaregiver(c.id)}
                          className="bg-teal-600 text-white px-3 py-1 rounded-lg text-sm font-bold hover:bg-teal-700">
                          Verify
                        </button>
                      )}
                      <button onClick={() => deleteCaregiver(c.id)}
                        className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm font-bold hover:bg-red-200">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Bookings */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">All Bookings</h2>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  {['Booking ID', 'User', 'Caregiver', 'Service', 'Date', 'Amount', 'Status'].map(h => (
                    <th key={h} className="text-left p-4 font-semibold text-gray-600">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b.id} className="border-t hover:bg-gray-50">
                    <td className="p-4 font-bold text-teal-600">{b.id}</td>
                    <td className="p-4">{b.user}</td>
                    <td className="p-4">{b.caregiver}</td>
                    <td className="p-4 text-gray-500">{b.service}</td>
                    <td className="p-4 text-gray-500">{b.date}</td>
                    <td className="p-4 font-bold">₹{b.amount}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        b.status === 'Active' ? 'bg-green-100 text-green-600' :
                        b.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>{b.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Complaints */}
        {activeTab === 'complaints' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">Complaints & Disputes</h2>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  {['User', 'Caregiver', 'Issue', 'Date', 'Status'].map(h => (
                    <th key={h} className="text-left p-4 font-semibold text-gray-600">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {complaints.map(c => (
                  <tr key={c.id} className="border-t hover:bg-gray-50">
                    <td className="p-4 font-bold">{c.user}</td>
                    <td className="p-4">{c.caregiver}</td>
                    <td className="p-4 text-gray-500">{c.issue}</td>
                    <td className="p-4 text-gray-500">{c.date}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        c.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-green-100 text-green-600'
                      }`}>{c.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}

export default AdminPage;