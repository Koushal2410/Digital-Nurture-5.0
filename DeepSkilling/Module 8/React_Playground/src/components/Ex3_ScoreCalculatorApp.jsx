import React, { useState } from 'react';

// Functional component CalculateScore as requested
const CalculateScore = ({ Name, School, Total, Goal }) => {
  const average = Goal > 0 ? (Total / Goal).toFixed(2) : 0;
  return (
    <div style={{
      marginTop: '20px',
      padding: '20px',
      border: '1px solid rgba(97, 218, 251, 0.3)',
      borderRadius: '10px',
      backgroundColor: 'rgba(97, 218, 251, 0.05)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h3 style={{ color: '#61dafb', margin: '0 0 15px 0' }}>Score Details</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <div><strong>Student Name:</strong> {Name}</div>
        <div><strong>School Name:</strong> {School}</div>
        <div><strong>Total Score:</strong> {Total}</div>
        <div><strong>Goal Score:</strong> {Goal}</div>
      </div>
      <div style={{
        marginTop: '15px',
        paddingTop: '15px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        color: '#4ade80'
      }}>
        Average Performance Index: {average}
      </div>
    </div>
  );
};

const Ex3_ScoreCalculatorApp = () => {
  const [name, setName] = useState('Jane Doe');
  const [school, setSchool] = useState('Oakwood High School');
  const [total, setTotal] = useState(450);
  const [goal, setGoal] = useState(500);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Score Calculator Portal
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        Enter student details below to calculate the score dynamically:
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '15px',
        maxWidth: '500px',
        marginBottom: '20px'
      }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Student Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: '#fff' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>School Name:</label>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: '#fff' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Total Marks:</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(Number(e.target.value))}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: '#fff' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Goal (Number of Subjects/Max):</label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: '#fff' }}
          />
        </div>
      </div>

      <CalculateScore Name={name} School={school} Total={total} Goal={goal} />
    </div>
  );
};

export default Ex3_ScoreCalculatorApp;
export { CalculateScore };
