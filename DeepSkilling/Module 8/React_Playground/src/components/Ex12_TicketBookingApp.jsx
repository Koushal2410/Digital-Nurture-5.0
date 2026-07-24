import React, { useState } from 'react';

const Ex12_TicketBookingApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookedTickets, setBookedTickets] = useState([]);

  const flights = [
    { id: 'AI-101', from: 'Kolkata', to: 'New Delhi', time: '10:00 AM', fare: 5500 },
    { id: '6E-203', from: 'Bengaluru', to: 'Mumbai', time: '02:30 PM', fare: 4800 },
    { id: 'UK-904', from: 'Kolkata', to: 'Chennai', time: '06:15 PM', fare: 6200 }
  ];

  const handleBook = (flight) => {
    if (bookedTickets.some(t => t.id === flight.id)) {
      alert(`Flight ${flight.id} is already booked!`);
      return;
    }
    setBookedTickets([...bookedTickets, flight]);
    alert(`Success: Ticket booked for Flight ${flight.id}!`);
  };

  const handleCancel = (flightId) => {
    setBookedTickets(bookedTickets.filter(t => t.id !== flightId));
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>Flight Ticket Booking Portal</h2>
        <button 
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
            if (isLoggedIn) setBookedTickets([]);
          }}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: isLoggedIn ? '#ef4444' : '#4ade80',
            color: isLoggedIn ? '#fff' : '#000',
            fontWeight: 'bold',
            border: 'none'
          }}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>

      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        Current State: {isLoggedIn ? '🔓 Logged In User Mode (Access to Ticket Booking)' : '🔒 Guest User Mode (View-only)'}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div>
          <h3>Available Flights</h3>
          {flights.map(f => (
            <div 
              key={f.id} 
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px',
                backgroundColor: 'rgba(255,255,255,0.02)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <span style={{ fontSize: '0.85rem', color: '#61dafb', fontWeight: 'bold' }}>{f.id}</span>
                <h4 style={{ margin: '5px 0' }}>{f.from} ➔ {f.to}</h4>
                <span style={{ fontSize: '0.9rem', color: '#888' }}>Departure: {f.time}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4ade80', marginBottom: '10px' }}>
                  ₹{f.fare}
                </div>
                {isLoggedIn ? (
                  <button 
                    onClick={() => handleBook(f)}
                    style={{ padding: '6px 12px', borderRadius: '4px', backgroundColor: '#3b82f6', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Book Ticket
                  </button>
                ) : (
                  <span style={{ fontSize: '0.85rem', color: '#ef4444', fontStyle: 'italic' }}>Login to book</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3>Your Booked Tickets</h3>
          {isLoggedIn ? (
            bookedTickets.length === 0 ? (
              <p style={{ color: '#666', fontStyle: 'italic' }}>No tickets booked yet.</p>
            ) : (
              bookedTickets.map(t => (
                <div 
                  key={t.id}
                  style={{
                    padding: '12px',
                    border: '1px solid #4ade80',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(74, 222, 128, 0.05)',
                    marginBottom: '10px'
                  }}
                >
                  <div style={{ fontWeight: 'bold' }}>{t.id}</div>
                  <div style={{ fontSize: '0.9rem', color: '#ccc' }}>{t.from} to {t.to}</div>
                  <button 
                    onClick={() => handleCancel(t.id)}
                    style={{ marginTop: '8px', padding: '2px 8px', fontSize: '0.8rem', borderRadius: '4px', backgroundColor: '#ef4444', border: 'none', color: '#fff', cursor: 'pointer' }}
                  >
                    Cancel Booking
                  </button>
                </div>
              ))
            )
          ) : (
            <div style={{ padding: '15px', border: '1px dashed #555', borderRadius: '6px', color: '#666', fontStyle: 'italic', textAlign: 'center' }}>
              Please login to view and manage your flight tickets.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ex12_TicketBookingApp;
