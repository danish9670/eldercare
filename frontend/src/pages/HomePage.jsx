import { useState } from 'react';
import { Link } from 'react-router-dom';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex justify-between items-center font-bold text-gray-800 hover:bg-gray-50">
        {question}
        <span className={`text-teal-600 text-xl transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}

function HomePage() {
  const services = [
    { icon: '👩‍⚕️', title: 'Nursing Care', desc: 'Professional nurses for medical assistance at home' },
    { icon: '🧑‍🦯', title: 'Elderly Attendant', desc: 'Dedicated attendants for daily care and companionship' },
    { icon: '🏃', title: 'Physiotherapy', desc: 'Expert physiotherapists for rehabilitation and mobility' },
    { icon: '🏥', title: 'Post-Hospital Care', desc: 'Specialized care after hospital discharge' },
  ];

  const stats = [
    { value: '500+', label: 'Verified Caregivers' },
    { value: '10,000+', label: 'Families Served' },
    { value: '15+', label: 'Cities Covered' },
    { value: '4.9★', label: 'Average Rating' },
  ];

  const steps = [
    { step: '01', title: 'Create Profile', desc: 'Register and create your elderly patient profile' },
    { step: '02', title: 'Choose Service', desc: 'Browse and select the care service you need' },
    { step: '03', title: 'Pick Caregiver', desc: 'Choose from verified and rated caregivers' },
    { step: '04', title: 'Get Care', desc: 'Caregiver arrives and service begins at your home' },
  ];

  const testimonials = [
    { name: 'Rahul Sharma', city: 'Delhi', text: 'ElderCare has been a blessing for our family. The nurse they provided for my father is extremely professional and caring.', rating: 5 },
    { name: 'Priya Gupta', city: 'Mumbai', text: 'Excellent service! The caregiver was punctual, skilled and very gentle with my elderly mother. Highly recommended!', rating: 5 },
    { name: 'Amit Singh', city: 'Bangalore', text: 'The physiotherapist helped my father recover from his stroke much faster than expected. Amazing service!', rating: 5 },
  ];

  const faqs = [
    { q: 'How are caregivers verified?', a: 'All caregivers go through a thorough background check, qualification verification, and in-person interview before being listed on our platform.' },
    { q: 'What if I am not satisfied with the caregiver?', a: 'We offer a free replacement within 24 hours if you are not satisfied with your assigned caregiver. Your satisfaction is our priority.' },
    { q: 'What are the payment options?', a: 'We accept all major payment methods including UPI, credit/debit cards, and net banking. Payment is collected after service confirmation.' },
    { q: 'Can I book a caregiver for long-term care?', a: 'Yes! We offer hourly, daily, weekly, and monthly booking options. Long-term bookings also get special discounted rates.' },
    { q: 'Is the service available 24/7?', a: 'Yes, our caregivers are available round the clock. You can book services for any time of day or night.' },
  ];

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-500 text-white">
        <div className="max-w-6xl mx-auto px-8 py-24 text-center">
          <span className="bg-teal-400 bg-opacity-40 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6 inline-block">
            🏥 Trusted by 10,000+ families across India
          </span>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Professional Elderly Care <br /> At Your Doorstep
          </h1>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Connect with verified nurses, caregivers, and physiotherapists for your loved ones. Quality care, right at home.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/services"
              className="bg-white text-teal-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-teal-50 transition">
              Book a Caregiver →
            </Link>
            <Link to="/signup"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-teal-600 transition">
              Register Free
            </Link>
          </div>
          <div className="flex gap-12 mt-16 justify-center">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold">{s.value}</p>
                <p className="text-teal-200">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-2">Our Care Services</h2>
        <p className="text-gray-500 text-center mb-10">Comprehensive elderly care services for every need</p>
        <div className="grid grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Link to="/services" key={i}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-teal-400 hover:shadow-lg transition">
              <span className="text-5xl mb-4 block">{s.icon}</span>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-2">How It Works</h2>
          <p className="text-gray-500 text-center mb-10">Get started in just 4 simple steps</p>
          <div className="grid grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-2">What Families Say</h2>
        <p className="text-gray-500 text-center mb-10">Real stories from real families we've helped</p>
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-gray-400 text-sm">📍 {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-center mb-10">Everything you need to know about ElderCare</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-teal-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Your loved ones deserve the best care</h2>
        <p className="text-teal-200 mb-8 text-lg">Book a verified caregiver today. Available 24/7.</p>
        <Link to="/services"
          className="bg-white text-teal-700 font-bold px-10 py-4 rounded-xl text-lg hover:bg-teal-50 transition">
          Get Started Now →
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p className="text-white font-bold text-xl mb-2">🏥 ElderCare</p>
        <p className="text-sm">© 2025 ElderCare. All rights reserved. | Compassionate Care for Your Loved Ones</p>
      </footer>

    </div>
  );
}

export default HomePage;