import React from 'react';
import { Routes, Route, Link, useParams, useLocation } from 'react-router-dom';

// 1. Trainer Model Properties
// TrainerId, Name, Email, Phone, Technology, Skills
const mockTrainers = [
  { id: '1', name: 'Alok Ranjan', email: 'alok.r@cognizant.com', phone: '+91-9876543210', technology: '.NET Core', skills: ['C#', 'EF Core', 'ASP.NET Web API'] },
  { id: '2', name: 'Suhasini Rao', email: 'suhasini.r@cognizant.com', phone: '+91-8765432109', technology: 'ReactJS', skills: ['ES6', 'JSX', 'Hooks', 'Redux'] },
  { id: '3', name: 'Megha Gupta', email: 'megha.g@cognizant.com', phone: '+91-7654321098', technology: 'DevOps & Docker', skills: ['Docker', 'Kubernetes', 'CI/CD', 'Git'] },
  { id: '4', name: 'Naveen Kumar', email: 'naveen.k@cognizant.com', phone: '+91-6543210987', technology: 'SQL Server', skills: ['Advanced SQL', 'Procedures', 'Query Optimization'] }
];

const TrainersHome = () => (
  <div style={{ padding: '15px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
    <h3>Welcome to Cognizant Academy Trainer Portal</h3>
    <p style={{ color: '#aaa' }}>This system is used to view internal trainers, their contact info, and their streams of expertise.</p>
  </div>
);

const TrainersList = () => {
  return (
    <div>
      <h3>Available Internal Trainers</h3>
      <p style={{ color: '#aaa', marginBottom: '15px' }}>Click on a trainer's name to view their full academy profile:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {mockTrainers.map(t => (
          <li key={t.id} style={{ margin: '10px 0', fontSize: '1.1rem' }}>
            <Link to={`/trainers-app/detail/${t.id}`} style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}>
              👤 {t.name} - {t.technology}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TrainerDetail = () => {
  const { id } = useParams();
  const trainer = mockTrainers.find(t => t.id === id);

  if (!trainer) {
    return <div style={{ color: '#ef4444' }}><h4>Trainer not found.</h4></div>;
  }

  return (
    <div style={{
      border: '1px solid #4ade80',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: 'rgba(74, 222, 128, 0.05)',
      marginTop: '15px'
    }}>
      <h3 style={{ color: '#4ade80', margin: '0 0 15px 0' }}>Trainer Details (ID: {trainer.id})</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <tbody>
          <tr>
            <th style={{ padding: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Full Name</th>
            <td style={{ padding: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{trainer.name}</td>
          </tr>
          <tr>
            <th style={{ padding: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Email Address</th>
            <td style={{ padding: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{trainer.email}</td>
          </tr>
          <tr>
            <th style={{ padding: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Contact Phone</th>
            <td style={{ padding: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{trainer.phone}</td>
          </tr>
          <tr>
            <th style={{ padding: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Primary Technology</th>
            <td style={{ padding: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{trainer.technology}</td>
          </tr>
          <tr>
            <th style={{ padding: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Expertise Skills</th>
            <td style={{ padding: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              {trainer.skills.map(s => (
                <span key={s} style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px', margin: '2px', fontSize: '0.85rem' }}>
                  {s}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: '15px' }}>
        <Link to="/trainers-app/list" style={{ color: '#61dafb', textDecoration: 'underline' }}>Back to Trainer List</Link>
      </div>
    </div>
  );
};

const Ex6_TrainersApp = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Trainer Management Application (React Router)
      </h2>
      
      {/* Sub navigation bar */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
        <Link to="/trainers-app" style={{ color: '#fff', textDecoration: 'none', padding: '6px 12px', borderRadius: '4px', backgroundColor: '#333' }}>Trainer Home</Link>
        <Link to="/trainers-app/list" style={{ color: '#fff', textDecoration: 'none', padding: '6px 12px', borderRadius: '4px', backgroundColor: '#333' }}>Trainer List</Link>
      </div>

      <Routes>
        <Route path="/" element={<TrainersHome />} />
        <Route path="/list" element={<TrainersList />} />
        <Route path="/detail/:id" element={<TrainerDetail />} />
      </Routes>
    </div>
  );
};

export default Ex6_TrainersApp;
export { TrainersHome, TrainersList, TrainerDetail };
