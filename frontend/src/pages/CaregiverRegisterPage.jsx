import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CaregiverRegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '',
    role: '', experience: '', qualification: '',
    specialization: [], location: '', city: '',
    price: '', about: '', languages: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSpecialization = (spec) => {
    if (form.specialization.includes(spec)) {
      setForm({ ...form, specialization: form.specialization.filter(s => s !== spec) });
    } else {
      setForm({ ...form, specialization: [...form.specialization, spec] });
    }
  };

  const handleSubmit = () => {
    if (!form.about || !form.price) {
      alert('Please fill all fields');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md">
          <p className="text-6xl mb-4">🎉</p>
          <h2 className="text-3xl font-bold text-green-600 mb-2">Application Submitted!</h2>
          <p className="text-gray-500 mb-2">Thank you for registering as a caregiver.</p>
          <p className="text-gray-500 mb-6">Our team will verify your profile within 24-48 hours.</p>
          <button onClick={() => navigate('/')}
            className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-700">
            Go to Home →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">👩‍⚕️ Register as Caregiver</h1>
          <p className="text-gray-500">Join our network of verified healthcare professionals</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= s ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>{s}</div>
              {i < 2 && <div className={`w-24 h-1 ${step > s ? 'bg-teal-600' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-16 text-sm font-semibold text-gray-500 mb-8">
          <span className={step >= 1 ? 'text-teal-600' : ''}>Personal Info</span>
          <span className={step >= 2 ? 'text-teal-600' : ''}>Professional</span>
          <span className={step >= 3 ? 'text-teal-600' : ''}>About You</span>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">

          {/* Step 1 - Personal Info */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-6">Personal Information</h2>
              <div className="space-y-4">
                {[
                  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Dr. John Doe' },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com' },
                  { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '10-digit mobile number' },
                  { label: 'Password', name: 'password', type: 'password', placeholder: 'Min 6 characters' },
                  { label: 'City / Location', name: 'city', type: 'text', placeholder: 'e.g. Delhi, Mumbai' },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block text-gray-600 font-semibold mb-2">{field.label}</label>
                    <input type={field.type} name={field.name}
                      placeholder={field.placeholder} value={form[field.name]}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                ))}
              </div>
              <button onClick={() => setStep(2)}
                className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 mt-6">
                Next: Professional Details →
              </button>
            </div>
          )}

          {/* Step 2 - Professional */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-6">Professional Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Role / Profession</label>
                  <select name="role" value={form.role} onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500">
                    <option value="">-- Select Role --</option>
                    <option>Registered Nurse</option>
                    <option>Elderly Attendant</option>
                    <option>Physiotherapist</option>
                    <option>Specialized Nurse</option>
                    <option>Home Health Aide</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Years of Experience</label>
                  <select name="experience" value={form.experience} onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500">
                    <option value="">-- Select Experience --</option>
                    <option>1-2 years</option>
                    <option>3-5 years</option>
                    <option>5-10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Qualification</label>
                  <input type="text" name="qualification" value={form.qualification}
                    onChange={handleChange} placeholder="e.g. B.Sc Nursing, MPT"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Hourly Rate (₹)</label>
                  <input type="number" name="price" value={form.price}
                    onChange={handleChange} placeholder="e.g. 500"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-3">Specializations</label>
                  <div className="flex flex-wrap gap-2">
                    {['Nursing Care', 'Elderly Attendant', 'Physiotherapy', 'Post-Hospital Care', 'Wound Care', 'Medication Management', 'Rehabilitation', 'Companionship'].map(spec => (
                      <button key={spec} type="button"
                        onClick={() => handleSpecialization(spec)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                          form.specialization.includes(spec)
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}>
                        {spec}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={() => setStep(1)}
                  className="w-full bg-gray-200 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-300">
                  ← Back
                </button>
                <button onClick={() => setStep(3)}
                  className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700">
                  Next: About You →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 - About */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-6">About You</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">About Yourself</label>
                  <textarea name="about" value={form.about} onChange={handleChange}
                    placeholder="Describe your experience, skills, and approach to care..."
                    rows={4}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">Languages Known</label>
                  <input type="text" name="languages" value={form.languages}
                    onChange={handleChange} placeholder="e.g. Hindi, English, Marathi"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                  />
                </div>

                {/* Summary */}
                <div className="bg-teal-50 rounded-xl p-4 mt-4">
                  <p className="font-bold text-teal-700 mb-2">Application Summary:</p>
                  <p className="text-sm text-gray-600">Name: {form.name}</p>
                  <p className="text-sm text-gray-600">Role: {form.role}</p>
                  <p className="text-sm text-gray-600">Experience: {form.experience}</p>
                  <p className="text-sm text-gray-600">City: {form.city}</p>
                  <p className="text-sm text-gray-600">Rate: ₹{form.price}/hr</p>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={() => setStep(2)}
                  className="w-full bg-gray-200 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-300">
                  ← Back
                </button>
                <button onClick={handleSubmit}
                  className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700">
                  Submit Application →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CaregiverRegisterPage;