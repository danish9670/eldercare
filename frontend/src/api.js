const API = '/api';

// Auth
export const registerUser = (data) =>
  fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const loginUser = (data) =>
  fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json());

// Caregivers
export const getCaregivers = (params = '') =>
  fetch(`${API}/caregivers${params}`).then(res => res.json());

// Bookings
export const createBooking = (data) =>
  fetch(`${API}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const getUserBookings = (userId) =>
  fetch(`${API}/bookings/user/${userId}`).then(res => res.json());

// Complaints
export const createComplaint = (data) =>
  fetch(`${API}/complaints`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json());