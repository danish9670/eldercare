import { useState } from 'react';

function MedicineReminderPage() {
  const [reminders, setReminders] = useState([
    { id: 1, medicine: 'Metformin 500mg', patient: 'Ram Prasad Sharma', time: '08:00', frequency: 'Daily', meals: 'After meals', status: 'Active', taken: false },
    { id: 2, medicine: 'Amlodipine 5mg', patient: 'Ram Prasad Sharma', time: '09:00', frequency: 'Daily', meals: 'Before meals', status: 'Active', taken: true },
    { id: 3, medicine: 'Levothyroxine 50mcg', patient: 'Savitri Devi Sharma', time: '07:00', frequency: 'Daily', meals: 'Empty stomach', status: 'Active', taken: false },
    { id: 4, medicine: 'Calcium + Vitamin D3', patient: 'Savitri Devi Sharma', time: '20:00', frequency: 'Daily', meals: 'After meals', status: 'Active', taken: false },
    { id: 5, medicine: 'Pantoprazole 40mg', patient: 'Ram Prasad Sharma', time: '08:30', frequency: 'Daily', meals: 'Before meals', status: 'Active', taken: true },
  ]);

  const [showAdd, setShowAdd] = useState(false);
  const [newReminder, setNewReminder] = useState({
    medicine: '', patient: '', time: '', frequency: 'Daily', meals: 'After meals'
  });

  const toggleTaken = (id) => {
    setReminders(reminders.map(r =>
      r.id === id ? { ...r, taken: !r.taken } : r
    ));
  };

  const handleAdd = () => {
    if (!newReminder.medicine || !newReminder.patient || !newReminder.time) {
      alert('Please fill all fields');
      return;
    }
    setReminders([...reminders, {
      ...newReminder,
      id: reminders.length + 1,
      status: 'Active',
      taken: false
    }]);
    setNewReminder({ medicine: '', patient: '', time: '', frequency: 'Daily', meals: 'After meals' });
    setShowAdd(false);
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter(r => r.id !== id));
  };

  const takenCount = reminders.filter(r => r.taken).length;
  const pendingCount = reminders.filter(r => !r.taken).length;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">💊 Medicine Reminders</h1>
            <p className="text-gray-500 mt-1">Track daily medications for your patients</p>
          </div>
          <button onClick={() => setShowAdd(true)}
            className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700">
            + Add Reminder
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-teal-500">
            <p className="text-4xl mb-1">💊</p>
            <p className="text-3xl font-bold">{reminders.length}</p>
            <p className="text-gray-500">Total Medicines</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-green-500">
            <p className="text-4xl mb-1">✅</p>
            <p className="text-3xl font-bold text-green-600">{takenCount}</p>
            <p className="text-gray-500">Taken Today</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-orange-500">
            <p className="text-4xl mb-1">⏰</p>
            <p className="text-3xl font-bold text-orange-600">{pendingCount}</p>
            <p className="text-gray-500">Pending Today</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex justify-between mb-2">
            <p className="font-bold">Today's Progress</p>
            <p className="font-bold text-teal-600">{takenCount}/{reminders.length} medicines taken</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-teal-600 h-4 rounded-full transition-all"
              style={{ width: `${(takenCount / reminders.length) * 100}%` }}
            />
          </div>
          <p className="text-gray-400 text-sm mt-2">
            {takenCount === reminders.length ? '🎉 All medicines taken today!' : `${pendingCount} medicines remaining`}
          </p>
        </div>

        {/* Add Reminder Modal */}
        {showAdd && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">Add Medicine Reminder</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Medicine Name</label>
                  <input type="text" placeholder="e.g. Metformin 500mg"
                    value={newReminder.medicine}
                    onChange={e => setNewReminder({...newReminder, medicine: e.target.value})}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Patient Name</label>
                  <select value={newReminder.patient}
                    onChange={e => setNewReminder({...newReminder, patient: e.target.value})}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500">
                    <option value="">-- Select Patient --</option>
                    <option>Ram Prasad Sharma</option>
                    <option>Savitri Devi Sharma</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Time</label>
                  <input type="time" value={newReminder.time}
                    onChange={e => setNewReminder({...newReminder, time: e.target.value})}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Frequency</label>
                  <select value={newReminder.frequency}
                    onChange={e => setNewReminder({...newReminder, frequency: e.target.value})}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500">
                    <option>Daily</option>
                    <option>Twice Daily</option>
                    <option>Weekly</option>
                    <option>As needed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">With Meals</label>
                  <select value={newReminder.meals}
                    onChange={e => setNewReminder({...newReminder, meals: e.target.value})}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500">
                    <option>After meals</option>
                    <option>Before meals</option>
                    <option>Empty stomach</option>
                    <option>With meals</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={handleAdd}
                  className="flex-1 bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700">
                  Add Reminder
                </button>
                <button onClick={() => setShowAdd(false)}
                  className="flex-1 bg-gray-200 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-300">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reminders List */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Today's Schedule</h2>
          {reminders
            .sort((a, b) => a.time.localeCompare(b.time))
            .map(reminder => (
            <div key={reminder.id}
              className={`bg-white rounded-2xl p-6 shadow-sm flex justify-between items-center ${
                reminder.taken ? 'opacity-60' : ''
              }`}>
              <div className="flex items-center gap-4">
                <button onClick={() => toggleTaken(reminder.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2 transition ${
                    reminder.taken
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-teal-500'
                  }`}>
                  {reminder.taken ? '✓' : '💊'}
                </button>
                <div>
                  <h3 className={`font-bold text-lg ${reminder.taken ? 'line-through text-gray-400' : ''}`}>
                    {reminder.medicine}
                  </h3>
                  <p className="text-gray-500 text-sm">👤 {reminder.patient}</p>
                  <p className="text-gray-400 text-sm">🍽️ {reminder.meals}</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-4">
                <div>
                  <p className="font-bold text-lg text-teal-600">⏰ {reminder.time}</p>
                  <p className="text-gray-400 text-sm">{reminder.frequency}</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    reminder.taken
                      ? 'bg-green-100 text-green-600'
                      : 'bg-orange-100 text-orange-600'
                  }`}>
                    {reminder.taken ? '✅ Taken' : '⏳ Pending'}
                  </span>
                </div>
                <button onClick={() => deleteReminder(reminder.id)}
                  className="text-red-400 hover:text-red-600 font-bold text-lg">
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MedicineReminderPage;