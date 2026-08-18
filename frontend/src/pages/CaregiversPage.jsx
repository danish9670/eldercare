import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop',
  },
  {
    id: 4,
    name: 'Mohammed Khan',
    role: 'Specialized Nurse',
    exp: '6 years',
    rating: 4.6,
    reviews: 98,
    location: 'Hyderabad',
    price: 750,
    available: true,
    specialization: ['Post-Hospital Care', 'Nursing Care'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop',
  },
  {
    id: 5,
    name: 'Sunita Patel',
    role: 'Elderly Attendant',
    exp: '4 years',
    rating: 4.5,
    reviews: 67,
    location: 'Ahmedabad',
    price: 300,
    available: true,
    specialization: ['Elderly Attendant', 'Personal Care'],
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop',
  },
  {
    id: 6,
    name: 'Dr. Vikram Nair',
    role: 'Physiotherapist',
    exp: '12 years',
    rating: 4.9,
    reviews: 203,
    location: 'Chennai',
    price: 1000,
    available: true,
    specialization: ['Physiotherapy', 'Pain Management'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop',
  },
];

function CaregiversPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = caregivers.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || c.role.includes(filter);
    return matchSearch && matchFilter;
  });

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="bg-teal-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">Find a Caregiver</h1>
        <p className="text-teal-200 text-lg">Browse verified and rated healthcare professionals</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8">

        {/* Search & Filter */}
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="🔍 Search by name or city..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 border-2 border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:border-teal-500 text-lg"
          />
          {['All', 'Nurse', 'Attendant', 'Physiotherapist'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-5 py-3 rounded-xl font-bold transition ${
                filter === f
                  ? 'bg-teal-600 text-white'
                  : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-teal-400'
              }`}>
              {f}
            </button>
          ))}
        </div>

        <p className="text-gray-500 mb-6">{filtered.length} caregivers found</p>

        {/* Caregivers Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filtered.map(c => (
            <div key={c.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={c.image} alt={c.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-teal-200"
                    onError={e => { e.target.src = 'https://via.placeholder.com/100?text=Dr'; }}
                  />
                  <div>
                    <h3 className="font-bold text-lg">{c.name}</h3>
                    <p className="text-teal-600 font-semibold text-sm">{c.role}</p>
                    <p className="text-gray-400 text-sm">📍 {c.location}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="font-bold">{c.rating}</span>
                    <span className="text-gray-400 text-sm">({c.reviews})</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    c.available
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-500'
                  }`}>
                    {c.available ? '● Available' : '● Busy'}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {c.specialization.map((s, i) => (
                    <span key={i} className="bg-teal-50 text-teal-600 px-2 py-1 rounded-full text-xs font-semibold">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-teal-600">₹{c.price}<span className="text-sm text-gray-400">/hr</span></p>
                    <p className="text-gray-400 text-xs">{c.exp} experience</p>
                  </div>
                </div>

                <Link to={`/booking/${c.id}`}
                  className={`w-full block text-center py-3 rounded-xl font-bold transition ${
                    c.available
                      ? 'bg-teal-600 text-white hover:bg-teal-700'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}>
                  {c.available ? 'Book Now →' : 'Not Available'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaregiversPage;