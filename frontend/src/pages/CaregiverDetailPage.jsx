import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const caregivers = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    role: 'Registered Nurse',
    exp: '8 years',
    rating: 4.9,
    reviews: 124,
    location: 'Delhi NCR',
    price: 600,
    available: true,
    specialization: ['Nursing Care', 'Post-Hospital Care'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    qualification: 'B.Sc Nursing, AIIMS Delhi',
    about: 'Dr. Priya is a highly experienced registered nurse with 8 years of expertise in home nursing care. She specializes in post-surgical care, wound management, and chronic disease management.',
    languages: ['Hindi', 'English'],
    reviewsList: [
      { name: 'Rahul Sharma', rating: 5, comment: 'Excellent care for my father. Very professional and caring.', date: '2025-05-10' },
      { name: 'Priya Gupta', rating: 5, comment: 'Highly recommended! Very punctual and knowledgeable.', date: '2025-04-22' },
      { name: 'Amit Singh', rating: 4, comment: 'Good service, very attentive to patient needs.', date: '2025-03-15' },
    ],
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Elderly Attendant',
    exp: '5 years',
    rating: 4.7,
    reviews: 89,
    location: 'Mumbai',
    price: 350,
    available: true,
    specialization: ['Elderly Attendant', 'Companionship'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    qualification: 'Certified Caregiver, Red Cross',
    about: 'Rahul is a dedicated elderly attendant with 5 years of experience providing compassionate care and companionship to senior citizens.',
    languages: ['Hindi', 'Marathi', 'English'],
    reviewsList: [
      { name: 'Sunita Patel', rating: 5, comment: 'Very caring and patient with my mother.', date: '2025-05-15' },
      { name: 'Vikram Nair', rating: 4, comment: 'Reliable and trustworthy attendant.', date: '2025-04-10' },
    ],
  },
  {
    id: 3,
    name: 'Dr. Anjali Singh',
    role: 'Physiotherapist',
    exp: '10 years',
    rating: 4.8,
    reviews: 156,
    location: 'Bangalore',
    price: 900,
    available: false,
    specialization: ['Physiotherapy', 'Rehabilitation'],
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
    qualification: 'MPT Orthopedics, Bangalore University',
    about: 'Dr. Anjali is a senior physiotherapist specializing in geriatric rehabilitation, post-stroke recovery, and mobility improvement for elderly patients.',
    languages: ['Hindi', 'Kannada', 'English'],
    reviewsList: [
      { name: 'Mohan Das', rating: 5, comment: 'My father recovered amazingly after her treatment.', date: '2025-05-20' },
      { name: 'Kavya Reddy', rating: 5, comment: 'Expert physiotherapist, highly professional.', date: '2025-04-05' },
      { name: 'Suresh Kumar', rating: 4, comment: 'Great results, very thorough approach.', date: '2025-03-20' },
    ],
  },
];

function CaregiverDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

  const caregiver = caregivers.find(c => c.id === parseInt(id));

  if (!caregiver) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">👩‍⚕️</p>
          <h2 className="text-2xl font-bold mb-4">Caregiver not found</h2>
          <Link to="/caregivers" className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold">
            Back to Caregivers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="bg-teal-700 text-white py-8 px-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/caregivers" className="text-teal-200 hover:text-white mb-4 inline-block">
            ← Back to Caregivers
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-8">

          {/* Left - Profile Card */}
          <div className="col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <img src={caregiver.image} alt={caregiver.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-teal-200 mx-auto mb-4"
                onError={e => { e.target.src = 'https://via.placeholder.com/200?text=Dr'; }}
              />
              <h2 className="text-xl font-bold text-center mb-1">{caregiver.name}</h2>
              <p className="text-teal-600 font-semibold text-center mb-1">{caregiver.role}</p>
              <p className="text-gray-400 text-sm text-center mb-4">📍 {caregiver.location}</p>

              <div className="flex justify-center mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                  caregiver.available
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-500'
                }`}>
                  {caregiver.available ? '● Available Now' : '● Currently Busy'}
                </span>
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Rating</span>
                  <span className="font-bold">⭐ {caregiver.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Experience</span>
                  <span className="font-bold">{caregiver.exp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Reviews</span>
                  <span className="font-bold">{caregiver.reviews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Rate</span>
                  <span className="font-bold text-teal-600">₹{caregiver.price}/hr</span>
                </div>
              </div>

              <button
                onClick={() => navigate(`/booking/${caregiver.id}`)}
                disabled={!caregiver.available}
                className={`w-full mt-6 py-3 rounded-xl font-bold transition ${
                  caregiver.available
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}>
                {caregiver.available ? 'Book Now →' : 'Not Available'}
              </button>
            </div>
          </div>

          {/* Right - Details */}
          <div className="col-span-2">

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {[
                { key: 'about', label: '👤 About' },
                { key: 'qualifications', label: '🎓 Qualifications' },
                { key: 'reviews', label: `⭐ Reviews (${caregiver.reviews})` },
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

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4">About {caregiver.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{caregiver.about}</p>

                <h4 className="font-bold mb-3">Specializations</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {caregiver.specialization.map((s, i) => (
                    <span key={i} className="bg-teal-50 text-teal-600 px-4 py-2 rounded-full font-semibold">
                      {s}
                    </span>
                  ))}
                </div>

                <h4 className="font-bold mb-3">Languages</h4>
                <div className="flex gap-2 mb-6">
                  {caregiver.languages.map((l, i) => (
                    <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Qualifications Tab */}
            {activeTab === 'qualifications' && (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Qualifications & Certifications</h3>
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-xl mb-4">
                  <span className="text-3xl">🎓</span>
                  <div>
                    <p className="font-bold text-teal-700">{caregiver.qualification}</p>
                    <p className="text-gray-500 text-sm">Primary Qualification</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl mb-4">
                  <span className="text-3xl">✅</span>
                  <div>
                    <p className="font-bold text-green-700">Verified by ElderCare</p>
                    <p className="text-gray-500 text-sm">Background check completed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                  <span className="text-3xl">🏥</span>
                  <div>
                    <p className="font-bold text-blue-700">{caregiver.exp} Experience</p>
                    <p className="text-gray-500 text-sm">Professional experience in elderly care</p>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-teal-600">{caregiver.rating}</p>
                    <div className="flex gap-1 justify-center mt-1">
                      {[1,2,3,4,5].map(s => (
                        <span key={s} className={s <= Math.floor(caregiver.rating) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{caregiver.reviews} reviews</p>
                  </div>
                </div>

                {caregiver.reviewsList.map((review, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-bold">{review.name}</p>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(s => (
                            <span key={s} className={s <= review.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{review.date}</p>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaregiverDetailPage;