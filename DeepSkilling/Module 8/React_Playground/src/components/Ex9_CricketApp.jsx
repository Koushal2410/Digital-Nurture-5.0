import React, { useState } from 'react';

// 1. ListofPlayers component
const ListofPlayers = () => {
  const players = [
    { id: 1, name: 'Virat Kohli', score: 85 },
    { id: 2, name: 'Rohit Sharma', score: 92 },
    { id: 3, name: 'KL Rahul', score: 68 },
    { id: 4, name: 'Rishabh Pant', score: 45 },
    { id: 5, name: 'Hardik Pandya', score: 75 },
    { id: 6, name: 'Ravindra Jadeja', score: 62 },
    { id: 7, name: 'R Ashwin', score: 35 },
    { id: 8, name: 'Jasprit Bumrah', score: 15 },
    { id: 9, name: 'Mohammed Shami', score: 10 },
    { id: 10, name: 'Yuzvendra Chahal', score: 8 },
    { id: 11, name: 'Shubman Gill', score: 72 }
  ];

  // Filter players with scores above/below 70 using arrow function
  const topPlayers = players.filter(p => p.score >= 70);

  return (
    <div style={{ padding: '10px' }}>
      <h3 style={{ color: '#61dafb' }}>All Players & High Scorers (Ex9 - Map & Filter)</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <h4>All Players</h4>
          <ul>
            {players.map(p => (
              <li key={p.id} style={{ color: p.score >= 70 ? '#4ade80' : '#aaa' }}>
                {p.name} - <strong>{p.score}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>High Scorers (Score &ge; 70)</h4>
          <ul>
            {topPlayers.map(p => (
              <li key={p.id} style={{ color: '#4ade80', fontWeight: 'bold' }}>
                🔥 {p.name} - {p.score}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// 2. IndianPlayers component
const IndianPlayers = () => {
  const indianTeam = ['Kohli', 'Sharma', 'Rahul', 'Pant', 'Pandya', 'Jadeja', 'Ashwin', 'Bumrah', 'Shami', 'Chahal', 'Gill'];
  
  // Destructuring players
  const [first, second, third, ...remaining] = indianTeam;

  // Odd Team and Even Team
  const oddTeam = indianTeam.filter((_, index) => index % 2 === 0);
  const evenTeam = indianTeam.filter((_, index) => index % 2 !== 0);

  // Merge arrays using ES6 Spread
  const T20players = ['Suryakumar', 'Ishaan', 'Sanju'];
  const RanjiTrophy = ['Sarfaraz', 'Easwaran', 'Rinku'];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div style={{ padding: '10px' }}>
      <h3 style={{ color: '#61dafb' }}>Team Formations (Ex9 - Destructuring & Spread)</h3>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}>
        <strong>Top 3 Batsmen (Destructured):</strong> {first}, {second}, {third}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <h4>Odd Team Players (1, 3, 5...)</h4>
          <ul>
            {oddTeam.map((p, i) => <li key={i}>🏏 {p}</li>)}
          </ul>
        </div>
        <div>
          <h4>Even Team Players (2, 4, 6...)</h4>
          <ul>
            {evenTeam.map((p, i) => <li key={i}>🏏 {p}</li>)}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '15px' }}>
        <h4>Merged Squad (T20 + Ranji Spread Merge)</h4>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {mergedPlayers.map((p, i) => (
            <span key={i} style={{ padding: '4px 10px', borderRadius: '20px', backgroundColor: '#3b82f6', color: '#fff', fontSize: '0.9rem' }}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Ex9_CricketApp = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Cricket Application (ES6 Features & Flag Rendering)
      </h2>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setFlag(!flag)} 
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: '#61dafb',
            color: '#000',
            border: 'none',
            fontWeight: 'bold'
          }}
        >
          Toggle Flag (Current: {flag.toString()})
        </button>
      </div>

      <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.1)' }}>
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </div>
    </div>
  );
};

export default Ex9_CricketApp;
export { ListofPlayers, IndianPlayers };
