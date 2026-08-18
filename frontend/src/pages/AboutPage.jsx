import { Link } from 'react-router-dom';

function AboutPage() {
  const team = [
    { name: 'Dr. Rajesh Kumar', role: 'Founder & CEO', icon: '👨‍⚕️', desc: 'Former AIIMS doctor with 20 years experience in elderly care' },
    { name: 'Priya Mehta', role: 'Head of Operations', icon: '👩‍💼', desc: 'Healthcare management expert with 15 years in hospital administration' },
    { name: 'Amit Sharma', role: 'Tech Lead', icon: '👨‍💻', desc: 'Full stack developer passionate about healthcare technology' },
    { name: 'Dr. Sunita Patel', role: 'Medical Advisor', icon: '👩‍⚕️', desc: 'Geriatric specialist ensuring quality care standards' },
  ];

  const values = [
    { icon: '❤️', title: 'Compassion', desc: 'We treat every patient like our own family member' },
    { icon: '✅', title: 'Trust', desc: 'All caregivers are thoroughly verified and background checked' },
    { icon: '🏆', title: 'Excellence', desc: 'We maintain the highest standards of care quality' },
    { icon: '🤝', title: 'Reliability', desc: 'Available 24/7 whenever you need us most' },
  ];

  const milestones = [
    { year: '2020', event: 'ElderCare founded in Delhi' },
    { year: '2021', event: 'Expanded to 5 cities, 100+ caregivers' },
    { year: '2022', event: 'Served 5,000+ families across India' },
    { year: '2023', event: 'Launched physiotherapy & post-hospital care' },
    { year: '2024', event: '10,000+ families served, 15 cities covered' },
    { year: '2025', event: 'Launched AI-powered caregiver matching' },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">About ElderCare</h1>
        <p className="text-teal-200 text-xl max-w-2xl mx-auto">
          We believe every elderly person deserves compassionate, professional care in the comfort of their own home.
        </p>
      </div>

      {/* Mission */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              ElderCare was founded with a simple but powerful mission — to make quality elderly care accessible to every family in India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We connect families with verified, trained, and compassionate caregivers who provide nursing care, physiotherapy, elderly attendance, and post-hospital care at home.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform ensures transparency, reliability, and quality at every step — from caregiver verification to service delivery.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '10,000+', label: 'Families Served' },
              { value: '500+', label: 'Verified Caregivers' },
              { value: '15+', label: 'Cities Covered' },
              { value: '4.9★', label: 'Average Rating' },
            ].map((stat, i) => (
              <div key={i} className="bg-teal-50 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-teal-600">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-2">Our Values</h2>
          <p className="text-gray-500 text-center mb-10">The principles that guide everything we do</p>
          <div className="grid grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
                <span className="text-5xl mb-4 block">{v.icon}</span>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-2">Our Team</h2>
        <p className="text-gray-500 text-center mb-10">The passionate people behind ElderCare</p>
        <div className="grid grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition">
              <span className="text-6xl mb-4 block">{member.icon}</span>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-teal-600 font-semibold text-sm mb-3">{member.role}</p>
              <p className="text-gray-500 text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-2">Our Journey</h2>
          <p className="text-gray-500 text-center mb-10">From a small startup to India's trusted elderly care platform</p>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="bg-teal-600 text-white px-4 py-2 rounded-xl font-bold text-sm min-w-fit">
                  {m.year}
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm flex-1">
                  <p className="text-gray-700 font-semibold">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-teal-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the ElderCare Family</h2>
        <p className="text-teal-200 mb-8">Whether you need care or want to provide care, we're here for you.</p>
        <div className="flex gap-4 justify-center">
          <Link to="/signup" className="bg-white text-teal-700 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition">
            Find a Caregiver →
          </Link>
          <Link to="/signup" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-teal-600 transition">
            Register as Caregiver
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p className="text-white font-bold text-xl mb-2">🏥 ElderCare</p>
        <p className="text-sm">© 2025 ElderCare. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default AboutPage;