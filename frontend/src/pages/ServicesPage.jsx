import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    icon: '👩‍⚕️',
    title: 'Nursing Care',
    desc: 'Professional nurses for medical assistance, wound care, medication management and health monitoring at home.',
    duration: 'Hourly / Daily / Monthly',
    price: 500,
    qualification: 'Registered Nurse (RN)',
    features: ['Medication Management', 'Wound Care', 'Health Monitoring', 'IV Therapy'],
  },
  {
    id: 2,
    icon: '🧑‍🦯',
    title: 'Elderly Attendant',
    desc: 'Dedicated attendants for daily personal care, hygiene assistance, companionship and mobility support.',
    duration: 'Hourly / Daily / Monthly',
    price: 300,
    qualification: 'Certified Caregiver',
    features: ['Personal Hygiene', 'Meal Assistance', 'Companionship', 'Mobility Support'],
  },
  {
    id: 3,
    icon: '🏃',
    title: 'Physiotherapy',
    desc: 'Expert physiotherapists for rehabilitation, pain management, and improving mobility and strength.',
    duration: 'Per Session / Weekly',
    price: 800,
    qualification: 'Licensed Physiotherapist',
    features: ['Pain Management', 'Rehabilitation', 'Exercise Therapy', 'Mobility Training'],
  },
  {
    id: 4,
    icon: '🏥',
    title: 'Post-Hospital Care',
    desc: 'Specialized care after hospital discharge to ensure smooth recovery and prevent readmission.',
    duration: 'Daily / Weekly / Monthly',
    price: 1000,
    qualification: 'Specialized Nurse',
    features: ['Recovery Monitoring', 'Medication Follow-up', 'Diet Management', 'Doctor Coordination'],
  },
];

function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="bg-teal-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">Our Care Services</h1>
        <p className="text-teal-200 text-lg">Professional, verified, and compassionate care for your loved ones</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 gap-8">
          {services.map(service => (
            <div key={service.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
              <div className="bg-teal-50 p-8 flex items-center gap-4">
                <span className="text-6xl">{service.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-teal-700">{service.title}</h3>
                  <p className="text-teal-600 font-semibold">Starting from ₹{service.price}/hr</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <div className="mb-4">
                  <p className="text-gray-500 text-sm mb-2">⏱ {service.duration}</p>
                  <p className="text-gray-500 text-sm">🎓 {service.qualification}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-teal-500">✓</span> {f}
                    </div>
                  ))}
                </div>
                <Link to="/caregivers"
                  className="w-full block text-center bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition">
                  Find Caregivers →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;