import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [card, setCard] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const orderDetails = {
    caregiver: 'Dr. Priya Sharma',
    service: 'Nursing Care',
    duration: '4 hours',
    date: '2025-06-20',
    amount: 2400,
    deposit: 1000,
    total: 3400,
  };

  const handlePayment = () => {
    if (paymentMethod === 'upi' && !upiId) {
      alert('Please enter UPI ID');
      return;
    }
    if (paymentMethod === 'card' && (!card.number || !card.name || !card.expiry || !card.cvv)) {
      alert('Please fill all card details');
      return;
    }
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2500);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">✅</span>
          </div>
          <h2 className="text-3xl font-bold text-green-600 mb-2">Payment Successful!</h2>
          <p className="text-gray-500 mb-2">Your booking has been confirmed.</p>
          <p className="text-gray-500 mb-6">Amount paid: <strong>₹{orderDetails.total}</strong></p>
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <p className="font-bold text-gray-700 mb-2">Booking Confirmed:</p>
            <p className="text-sm text-gray-600">Caregiver: {orderDetails.caregiver}</p>
            <p className="text-sm text-gray-600">Service: {orderDetails.service}</p>
            <p className="text-sm text-gray-600">Date: {orderDetails.date}</p>
            <p className="text-sm text-gray-600">Transaction ID: TXN{Date.now()}</p>
          </div>
          <button onClick={() => navigate('/dashboard')}
            className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700">
            Go to Dashboard →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-3xl font-bold mb-8">💳 Payment</h1>

        <div className="grid grid-cols-2 gap-8">

          {/* Payment Methods */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
              <h2 className="text-xl font-bold mb-6">Select Payment Method</h2>

              {/* Payment Options */}
              <div className="space-y-3 mb-6">
                {[
                  { key: 'upi', label: 'UPI Payment', icon: '📱', desc: 'Pay using UPI ID or QR Code' },
                  { key: 'card', label: 'Credit / Debit Card', icon: '💳', desc: 'Visa, Mastercard, RuPay' },
                  { key: 'netbanking', label: 'Net Banking', icon: '🏦', desc: 'All major banks supported' },
                  { key: 'wallet', label: 'Wallets', icon: '👝', desc: 'Paytm, PhonePe, Amazon Pay' },
                ].map(method => (
                  <button key={method.key}
                    onClick={() => setPaymentMethod(method.key)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition ${
                      paymentMethod === method.key
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                    <span className="text-2xl">{method.icon}</span>
                    <div className="text-left">
                      <p className="font-bold">{method.label}</p>
                      <p className="text-gray-400 text-sm">{method.desc}</p>
                    </div>
                    <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === method.key ? 'border-teal-500 bg-teal-500' : 'border-gray-300'
                    }`}>
                      {paymentMethod === method.key && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                  </button>
                ))}
              </div>

              {/* UPI Input */}
              {paymentMethod === 'upi' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-600 font-semibold mb-2">Enter UPI ID</label>
                    <input type="text" placeholder="yourname@paytm"
                      value={upiId}
                      onChange={e => setUpiId(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-3">— OR scan QR code —</p>
                    <div className="bg-gray-100 rounded-xl p-6 inline-block">
                      <div className="w-32 h-32 bg-white border-2 border-gray-300 rounded-xl flex items-center justify-center">
                        <span className="text-4xl">📱</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-2">Scan with any UPI app</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Card Input */}
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-600 font-semibold mb-2">Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      value={card.number}
                      onChange={e => setCard({...card, number: e.target.value})}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-semibold mb-2">Cardholder Name</label>
                    <input type="text" placeholder="Name on card"
                      value={card.name}
                      onChange={e => setCard({...card, name: e.target.value})}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 font-semibold mb-2">Expiry Date</label>
                      <input type="text" placeholder="MM/YY"
                        maxLength={5}
                        value={card.expiry}
                        onChange={e => setCard({...card, expiry: e.target.value})}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-2">CVV</label>
                      <input type="password" placeholder="•••"
                        maxLength={3}
                        value={card.cvv}
                        onChange={e => setCard({...card, cvv: e.target.value})}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Net Banking */}
              {paymentMethod === 'netbanking' && (
                <div className="grid grid-cols-3 gap-3">
                  {['SBI', 'HDFC', 'ICICI', 'Axis', 'Kotak', 'PNB'].map(bank => (
                    <button key={bank}
                      className="border-2 border-gray-200 rounded-xl p-4 text-center font-bold hover:border-teal-500 hover:bg-teal-50 transition">
                      🏦 {bank}
                    </button>
                  ))}
                </div>
              )}

              {/* Wallet */}
              {paymentMethod === 'wallet' && (
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'Paytm', icon: '💙' },
                    { name: 'PhonePe', icon: '💜' },
                    { name: 'Amazon Pay', icon: '🟠' },
                    { name: 'Google Pay', icon: '🔵' },
                  ].map(wallet => (
                    <button key={wallet.name}
                      className="border-2 border-gray-200 rounded-xl p-4 text-center font-bold hover:border-teal-500 hover:bg-teal-50 transition">
                      {wallet.icon} {wallet.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Pay Button */}
            <button onClick={handlePayment} disabled={processing}
              className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition disabled:opacity-50">
              {processing ? (
                <span className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing Payment...
                </span>
              ) : (
                `Pay ₹${orderDetails.total} Securely →`
              )}
            </button>
            <p className="text-center text-gray-400 text-sm mt-3">🔒 256-bit SSL Encrypted Payment</p>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="bg-teal-50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">👩‍⚕️</span>
                  <div>
                    <p className="font-bold">{orderDetails.caregiver}</p>
                    <p className="text-teal-600 text-sm">{orderDetails.service}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">📅 {orderDetails.date}</p>
                <p className="text-gray-500 text-sm">⏱ {orderDetails.duration}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Service Charges</span>
                  <span>₹{orderDetails.amount}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Security Deposit</span>
                  <span>₹{orderDetails.deposit}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹0</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span className="text-teal-600">₹{orderDetails.total}</span>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-green-600 font-semibold text-sm">
                  ✅ Security deposit of ₹{orderDetails.deposit} is fully refundable after service completion.
                </p>
              </div>

              <div className="mt-6 space-y-2">
                <p className="font-bold text-gray-700">We Accept:</p>
                <div className="flex gap-2 flex-wrap">
                  {['UPI', 'Visa', 'Mastercard', 'RuPay', 'Paytm'].map(p => (
                    <span key={p} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-semibold">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;