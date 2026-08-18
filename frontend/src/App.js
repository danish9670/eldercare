import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CaregiversPage from './pages/CaregiversPage';
import CaregiverDetailPage from './pages/CaregiverDetailPage';
import CaregiverRegisterPage from './pages/CaregiverRegisterPage';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import AboutPage from './pages/AboutPage';
import PatientProfilePage from './pages/PatientProfilePage';
import MedicineReminderPage from './pages/MedicineReminderPage';
import PaymentPage from './pages/PaymentPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/caregivers" element={<CaregiversPage />} />
              <Route path="/caregivers/:id" element={<CaregiverDetailPage />} />
              <Route path="/register-caregiver" element={<CaregiverRegisterPage />} />
              <Route path="/booking/:id" element={<BookingPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/patients" element={<PatientProfilePage />} />
              <Route path="/medicines" element={<MedicineReminderPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;