import { useState } from 'react';

function PatientProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'Ram Prasad Sharma',
      age: 72,
      gender: 'Male',
      bloodGroup: 'B+',
      phone: '9876543210',
      address: 'House No. 45, Sector 12, Delhi',
      relation: 'Father',
      conditions: ['Diabetes Type 2', 'Hypertension', 'Arthritis'],
      allergies: ['Penicillin', 'Sulfa drugs', 'Aspirin'],
      medications: [
        { name: 'Metformin 500mg', frequency: 'Twice daily', time: 'Morning & Night', meals: 'After meals' },
        { name: 'Amlodipine 5mg', frequency: 'Once daily', time: 'Morning', meals: 'Before meals' },
        { name: 'Pantoprazole 40mg', frequency: 'Once daily', time: 'Morning', meals: 'Before meals' },
      ],
      history: [
        { date: '2025-05-10', doctor: 'Dr. Priya Sharma', notes: 'Blood sugar levels improving. Continue current medication.' },
        { date: '2025-04-15', doctor: 'Dr. Rahul Verma', notes: 'BP slightly elevated. Increased Amlodipine dosage.' },
        { date: '2025-03-20', doctor: 'Dr. Priya Sharma', notes: 'Routine checkup. All vitals stable.' },
      ],
      vitals: { bp: '130/85', sugar: '142 mg/dL', weight: '68 kg', pulse: '78 bpm' },
    },
    {
      id: 2,
      name: 'Savitri Devi Sharma',
      age: 68,
      gender: 'Female',
      bloodGroup: 'O+',
      phone: '9876543211',
      address: 'House No. 45, Sector 12, Delhi',
      relation: 'Mother',
      conditions: ['Osteoporosis', 'Thyroid (Hypothyroid)'],
      allergies: ['Latex', 'Ibuprofen'],
      medications: [
        { name: 'Levothyroxine 50mcg', frequency: 'Once daily', time: 'Morning', meals: 'Empty stomach' },
        { name: 'Calcium + Vitamin D3', frequency: 'Twice daily', time: 'Morning & Night', meals: 'After meals' },
      ],
      history: [
        { date: '2025-05-20', doctor: 'Dr. Anjali Singh', notes: 'Thyroid levels normal. Continue medication.' },
        { date: '2025-04-10', doctor: 'Dr. Anjali Singh', notes: 'Bone density improving with calcium supplements.' },
      ],
      vitals: { bp: '120/80', sugar: '95 mg/dL', weight: '55 kg', pulse: '72 bpm' },
    },
  ]);

  const [newPatient, setNewPatient] = useState({
    name: '', age: '', gender: 'Male', bloodGroup: '',
    phone: '', address: '', relation: '',
    conditions: '', allergies: '', medications: '',
  });

  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  const handleAddPatient = () => {
    if (!newPatient.name || !newPatient.age) {
      alert('Please fill required fields');
      return;
    }
    const patient = {
      id: patients.length + 1,
      ...newPatient,
      age: Number(newPatient.age),
      conditions: newPatient.conditions.split(',').map(s => s.trim()).filter(Boolean),
      allergies: newPatient.allergies.split(',').map(s => s.trim()).filter(Boolean),
      medications: newPatient.medications ? [{ name: newPatient.medications, frequency: 'As prescribed', time: '-', meals: '-' }] : [],
      history: [],
      vitals: { bp: '-', sugar: '-', weight: '-', pulse: '-' },
    };
    setPatients([...patients, patient]);
    setSelectedPatient(patient);
    setShowAddPatient(false);
    setNewPatient({ name: '', age: '', gender: 'Male', bloodGroup: '', phone: '', address: '', relation: '', conditions: '', allergies: '', medications: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">🏥 Patient Profiles</h1>
            <p className="text-gray-500 mt-1">Manage medical profiles of your loved ones</p>
          </div>
          <button onClick={() => setShowAddPatient(true)}
            className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700">
            + Add Patient
          </button>
        </div>

        {/* Add Patient Modal */}
        {showAddPatient && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 w-full max-w-lg max-h-screen overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">Add New Patient</h2>
              <div className="space-y-4">
                {[
                  { label: 'Full Name *', key: 'name', type: 'text', placeholder: 'Patient full name' },
                  { label: 'Age *', key: 'age', type: 'number', placeholder: 'Age in years' },
                  { label: 'Blood Group', key: 'bloodGroup', type: 'text', placeholder: 'e.g. A+, B-, O+' },
                  { label: 'Phone', key: 'phone', type: 'tel', placeholder: '10-digit number' },
                  { label: 'Relation', key: 'relation', type: 'text', placeholder: 'e.g. Father, Mother' },
                  { label: 'Address', key: 'address', type: 'text', placeholder: 'Home address' },
                  { label: 'Medical Conditions', key: 'conditions', type: 'text', placeholder: 'Comma separated e.g. Diabetes, BP' },
                  { label: 'Allergies', key: 'allergies', type: 'text', placeholder: 'Comma separated e.g. Penicillin, Aspirin' },
                  { label: 'Current Medications', key: 'medications', type: 'text', placeholder: 'e.g. Metformin 500mg' },
                ].map(field => (
                  <div key={field.key}>
                    <label className="block text-gray-600 font-semibold mb-1">{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder}
                      value={newPatient[field.key]}
                      onChange={e => setNewPatient({...newPatient, [field.key]: e.target.value})}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">Gender</label>
                  <select value={newPatient.gender}
                    onChange={e => setNewPatient({...newPatient, gender: e.target.value})}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:border-teal-500">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={handleAddPatient}
                  className="flex-1 bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700">
                  Add Patient
                </button>
                <button onClick={() => setShowAddPatient(false)}
                  className="flex-1 bg-gray-200 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-300">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-4 gap-6">

          {/* Patient List */}
          <div className="col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <h3 className="font-bold text-gray-700 mb-4">My Patients</h3>
              <div className="space-y-3">
                {patients.map(p => (
                  <button key={p.id} onClick={() => setSelectedPatient(p)}
                    className={`w-full text-left p-3 rounded-xl transition ${
                      selectedPatient.id === p.id
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}>
                    <p className="font-bold text-sm">{p.name}</p>
                    <p className={`text-xs ${selectedPatient.id === p.id ? 'text-teal-200' : 'text-gray-400'}`}>
                      {p.age} yrs • {p.relation}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Patient Detail */}
          <div className="col-span-3">

            {/* Patient Header Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {selectedPatient.name[0]}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedPatient.name}</h2>
                    <p className="text-gray-500">{selectedPatient.age} years • {selectedPatient.gender} • {selectedPatient.relation}</p>
                    <p className="text-gray-400 text-sm">📍 {selectedPatient.address}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold text-sm">
                    🩸 {selectedPatient.bloodGroup}
                  </span>
                </div>
              </div>

              {/* Vitals */}
              <div className="grid grid-cols-4 gap-4 mt-6">
                {[
                  { label: 'Blood Pressure', value: selectedPatient.vitals.bp, icon: '❤️', color: 'red' },
                  { label: 'Blood Sugar', value: selectedPatient.vitals.sugar, icon: '🩸', color: 'orange' },
                  { label: 'Weight', value: selectedPatient.vitals.weight, icon: '⚖️', color: 'blue' },
                  { label: 'Pulse', value: selectedPatient.vitals.pulse, icon: '💓', color: 'pink' },
                ].map((vital, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-2xl mb-1">{vital.icon}</p>
                    <p className="font-bold text-gray-800">{vital.value}</p>
                    <p className="text-gray-400 text-xs">{vital.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {[
                { key: 'profile', label: '👤 Medical Info' },
                { key: 'medications', label: '💊 Medications' },
                { key: 'history', label: '📋 History' },
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

            {/* Medical Info Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-4">

                {/* Conditions */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">🏥 Medical Conditions</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPatient.conditions.length > 0 ? selectedPatient.conditions.map((c, i) => (
                      <span key={i} className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold">
                        {c}
                      </span>
                    )) : <p className="text-gray-400">No conditions recorded</p>}
                  </div>
                </div>

                {/* Allergies */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">⚠️ Allergies</h3>
                  {selectedPatient.allergies.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedPatient.allergies.map((a, i) => (
                        <span key={i} className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                          ⚠️ {a}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">No known allergies</p>
                  )}
                  {selectedPatient.allergies.length > 0 && (
                    <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="text-red-600 font-semibold text-sm">
                        ⚠️ Alert: Please inform all caregivers and doctors about these allergies before any treatment.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* Medications Tab */}
            {activeTab === 'medications' && (
              <div className="space-y-4">
                {selectedPatient.medications.length > 0 ? selectedPatient.medications.map((med, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-2xl">
                        💊
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{med.name}</h3>
                        <p className="text-gray-500 text-sm">🕐 {med.time} • {med.frequency}</p>
                        <p className="text-gray-400 text-sm">🍽️ {med.meals}</p>
                      </div>
                    </div>
                    <span className="bg-teal-100 text-teal-600 px-4 py-2 rounded-full font-semibold text-sm">
                      {med.frequency}
                    </span>
                  </div>
                )) : (
                  <div className="bg-white rounded-2xl p-8 shadow-sm text-center text-gray-400">
                    <p className="text-4xl mb-2">💊</p>
                    <p>No medications recorded</p>
                  </div>
                )}
              </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <div className="space-y-4">
                {selectedPatient.history.length > 0 ? selectedPatient.history.map((h, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-bold text-lg">{h.doctor}</p>
                        <p className="text-gray-400 text-sm">📅 {h.date}</p>
                      </div>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                        Consultation
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-gray-600">📝 {h.notes}</p>
                    </div>
                  </div>
                )) : (
                  <div className="bg-white rounded-2xl p-8 shadow-sm text-center text-gray-400">
                    <p className="text-4xl mb-2">📋</p>
                    <p>No medical history recorded</p>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProfilePage;