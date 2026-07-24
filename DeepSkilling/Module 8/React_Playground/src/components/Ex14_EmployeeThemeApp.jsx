import React, { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';

// EmployeeCard component consumes ThemeContext using useContext hook
const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext);

  const cardStyle = {
    padding: '15px',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
    color: theme === 'light' ? '#000000' : '#ffffff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease'
  };

  const btnStyle = {
    marginTop: '10px',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: theme === 'light' ? '#000000' : '#4ade80',
    color: theme === 'light' ? '#ffffff' : '#000000'
  };

  return (
    <div style={cardStyle}>
      <h4 style={{ margin: '0 0 5px 0' }}>👤 {employee.name}</h4>
      <div style={{ fontSize: '0.9rem', color: theme === 'light' ? '#555' : '#aaa' }}>
        Role: {employee.role}
      </div>
      <div style={{ fontSize: '0.9rem', color: theme === 'light' ? '#555' : '#aaa' }}>
        Department: {employee.dept}
      </div>
      <button style={btnStyle}>
        View Details ({theme.toUpperCase()} style)
      </button>
    </div>
  );
};

// EmployeeList component passes no props down to child components
const EmployeeList = () => {
  const employees = [
    { id: 101, name: 'Alice Walker', role: 'Software Engineer', dept: 'Development' },
    { id: 102, name: 'Bob Johnson', role: 'DevOps Lead', dept: 'Infrastructure' },
    { id: 103, name: 'Charlie Kim', role: 'Scrum Master', dept: 'Delivery' }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '15px' }}>
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

const Ex14_EmployeeThemeApp = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Employee Management Portal (React Context API)
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        Click the button below to toggle context theme provider value (propagated without props):
      </p>

      <button 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          backgroundColor: '#3b82f6',
          border: 'none',
          color: '#fff',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}
      >
        Toggle Theme Context (Current: {theme.toUpperCase()})
      </button>

      {/* Provider supplies the context value to all children nested in tree */}
      <ThemeContext.Provider value={theme}>
        <div style={{
          padding: '20px', 
          borderRadius: '8px', 
          backgroundColor: theme === 'light' ? '#f3f4f6' : '#111827',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h3 style={{ margin: 0, color: theme === 'light' ? '#000' : '#fff' }}>Employee Workspace</h3>
          <EmployeeList />
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default Ex14_EmployeeThemeApp;
export { EmployeeList, EmployeeCard };
