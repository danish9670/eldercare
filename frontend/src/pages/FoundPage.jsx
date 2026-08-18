import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-9xl font-extrabold text-teal-600 mb-4">404</p>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-gray-500 text-lg mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/"
            className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-700 transition">
            Go Home →
          </Link>
          <Link to="/services"
            className="bg-white border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-xl font-bold hover:bg-teal-50 transition">
            Browse Services
          </Link>
        </div>
        <p className="text-gray-400 mt-8">🏥 ElderCare — Quality care for your loved ones</p>
      </div>
    </div>
  );
}

export default NotFoundPage;