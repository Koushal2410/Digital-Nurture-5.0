import React, { useState } from 'react';

// ComplaintRegister component as requested
const ComplaintRegister = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [complaintText, setComplaintText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employeeName.trim() || !complaintText.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    // Generate random reference number
    const refNumber = Math.floor(100000 + Math.random() * 900000);
    alert(`Thank you ${employeeName}!\nYour complaint has been successfully registered.\nReference Number: REF-${refNumber}`);
    
    // Clear form
    setEmployeeName('');
    setComplaintText('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
      <h3 style={{ color: '#61dafb', margin: '0 0 15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
        Register Complaint
      </h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Employee Name:</label>
          <input 
            type="text" 
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: '#fff' }}
            required
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Complaint Details:</label>
          <textarea 
            value={complaintText}
            onChange={(e) => setComplaintText(e.target.value)}
            rows="5"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: '#fff', resize: 'vertical' }}
            required
          />
        </div>
        <button 
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: '#61dafb',
            color: '#000',
            border: 'none',
            marginTop: '5px'
          }}
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

const Ex15_TicketRaisingApp = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Ticket Raising Portal (Controlled Forms)
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        This page registers a complaint using a controlled form and generates a reference number on submit:
      </p>
      <ComplaintRegister />
    </div>
  );
};

export default Ex15_TicketRaisingApp;
export { ComplaintRegister };
