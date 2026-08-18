import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api';

function SignupPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '', confirm: '', role: 'user'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (!form.name || !form.email || !form.phone || !form.password || !form.confirm) {
      setError('Please fill in all fields');
      return;
    }
    if (!form.email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    if (form.phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const data = await registerUser({
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
        role: form.role,
      });
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-4xl mb-2">🏥</p>
          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-500 mt-1">Join ElderCare — Quality care for your loved ones</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6">
            ⚠️ {error}
          </div>
        )}

        {/* Role Selection */}
        <div className="flex gap-4 mb-6">
          {['user', 'caregiver'].map(role => (
            <button key={role} onClick={() => setForm({...form, role})}
              className={`flex-1 py-3 rounded-xl font-bold transition ${
                form.role === role
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
              {role === 'user' ? '👨‍👩‍👧 Family / User' : '👩‍⚕️ Caregiver'}
            </button>
          ))}
        </div>

        {[
          { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
          { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com' },
          { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '10-digit mobile number' },
          { label: 'Password', name: 'password', type: 'password', placeholder: 'Min 6 characters' },
          { label: 'Confirm Password', name: 'confirm', type: 'password', placeholder: 'Re-enter password' },
        ].map(field => (
          <div className="mb-4" key={field.name}>
            <label className="block text-gray-700 font-semibold mb-2">{field.label}</label>
            <input type={field.type} name={field.name}
              placeholder={field.placeholder} value={form[field.name]}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition"
            />
          </div>
        ))}

        <button onClick={handleSignup} disabled={loading}
          className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-teal-700 transition mt-2 disabled:opacity-50">
          {loading ? 'Creating Account...' : 'Create Account →'}
        </button>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-teal-600 font-bold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;