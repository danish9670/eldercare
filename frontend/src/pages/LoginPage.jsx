import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const data = await loginUser({ email, password });
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-4xl mb-2">🏥</p>
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mt-1">Login to your ElderCare account</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6">
            ⚠️ {error}
          </div>
        )}

        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
          <input type="email" placeholder="you@example.com" value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" placeholder="Enter your password" value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition"
          />
        </div>

        <button onClick={handleLogin} disabled={loading}
          className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-teal-700 transition disabled:opacity-50">
          {loading ? 'Logging in...' : 'Login →'}
        </button>

        <p className="text-center mt-6 text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-teal-600 font-bold hover:underline">Register Free</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;