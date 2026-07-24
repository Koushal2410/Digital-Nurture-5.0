import React from 'react';

const Ex10_OfficeSpaceRentalApp = () => {
  const officeSpaces = [
    { id: 1, name: 'Premium Tech Hub', rent: 75000, address: 'Sector 5, Salt Lake, Kolkata', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=350&q=80' },
    { id: 2, name: 'Co-Working Shared Space', rent: 45000, address: 'MG Road, Bengaluru', image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=350&q=80' },
    { id: 3, name: 'Exclusive Executive Suite', rent: 110000, address: 'Cyber City, Gurugram', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=350&q=80' },
    { id: 4, name: 'Startup Incubator Studio', rent: 55000, address: 'Hitech City, Hyderabad', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=350&q=80' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Office Space Rental Portal (JSX & Conditional CSS)
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        Looping through office rentals and displaying rent in <strong>Green (&gt;60,000)</strong> or <strong>Red (&lt;60,000)</strong>:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {officeSpaces.map(office => (
          <div 
            key={office.id} 
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundColor: 'rgba(255,255,255,0.02)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            <img 
              src={office.image} 
              alt={office.name} 
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '15px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#fff' }}>
                {office.name}
              </h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', margin: '0 0 15px 0', minHeight: '38px' }}>
                📍 {office.address}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: '#888' }}>Monthly Rent:</span>
                <span style={{ 
                  fontWeight: 'bold', 
                  fontSize: '1.25rem',
                  color: office.rent > 60000 ? '#4ade80' : '#ef4444' 
                }}>
                  ₹{office.rent.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ex10_OfficeSpaceRentalApp;
