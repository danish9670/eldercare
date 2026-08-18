import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Caregivers', path: '/caregivers' },
];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🏥</span>
          <span className="text-2xl font-extrabold text-teal-600">ElderCare</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path}
              className={`font-semibold transition ${
                location.pathname === link.path
                  ? 'text-teal-600 border-b-2 border-teal-600 pb-1'
                  : 'text-gray-600 hover:text-teal-600'
              }`}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link to="/login"
            className="text-gray-600 hover:text-teal-600 font-semibold transition">
            Login
          </Link>
          <Link to="/signup"
            className="bg-teal-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-teal-700 transition">
            Register Free
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;