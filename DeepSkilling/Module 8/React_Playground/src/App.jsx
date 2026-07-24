import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Ex1_MyFirstReact from './components/Ex1_MyFirstReact';
import Ex2_StudentApp from './components/Ex2_StudentApp';
import Ex3_ScoreCalculatorApp from './components/Ex3_ScoreCalculatorApp';
import Ex4_BlogApp from './components/Ex4_BlogApp';
import Ex5_CohortDashboard from './components/Ex5_CohortDashboard';
import Ex6_TrainersApp from './components/Ex6_TrainersApp';
import Ex7_ShoppingApp from './components/Ex7_ShoppingApp';
import Ex8_CounterApp from './components/Ex8_CounterApp';
import Ex9_CricketApp from './components/Ex9_CricketApp';
import Ex10_OfficeSpaceRentalApp from './components/Ex10_OfficeSpaceRentalApp';
import Ex11_EventExamplesApp from './components/Ex11_EventExamplesApp';
import Ex12_TicketBookingApp from './components/Ex12_TicketBookingApp';
import Ex13_BloggerApp from './components/Ex13_BloggerApp';
import Ex14_EmployeeThemeApp from './components/Ex14_EmployeeThemeApp';
import Ex15_TicketRaisingApp from './components/Ex15_TicketRaisingApp';
import Ex16_MailRegisterApp from './components/Ex16_MailRegisterApp';
import Ex17_FetchUserApp from './components/Ex17_FetchUserApp';
import Ex18_UnitTestingGuide from './components/Ex18_UnitTestingGuide';
import Ex19_GitClientApp from './components/Ex19_GitClientApp';

const App = () => {
  const navItems = [
    { path: '/', label: '🏠 Dashboard' },
    { path: '/ex1', label: '1. Welcome Text' },
    { path: '/ex2', label: '2. Student Portal' },
    { path: '/ex3', label: '3. Score Calculator' },
    { path: '/ex4', label: '4. Blog API fetch' },
    { path: '/ex5', label: '5. Cohort Styles' },
    { path: '/trainers-app', label: '6. Trainers Router' },
    { path: '/ex7', label: '7. Shopping Cart' },
    { path: '/ex8', label: '8. Entry Counter' },
    { path: '/ex9', label: '9. Cricket ES6 List' },
    { path: '/ex10', label: '10. Rent Colors' },
    { path: '/ex11', label: '11. Event Converts' },
    { path: '/ex12', label: '12. Ticket Book' },
    { path: '/ex13', label: '13. Blogger Tabs' },
    { path: '/ex14', label: '14. Context Theme' },
    { path: '/ex15', label: '15. Ticket Form' },
    { path: '/ex16', label: '16. Mail Register' },
    { path: '/ex17', label: '17. Fetch User Profile' },
    { path: '/ex18', label: '18. Jest Unit Tests' },
    { path: '/ex19', label: '19. Git Client Mock' }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'sans-serif' }}>
      
      {/* Sidebar Navigation */}
      <aside style={{
        width: '260px',
        backgroundColor: '#1e293b',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        padding: '20px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto'
      }}>
        <div style={{ padding: '10px 15px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '15px' }}>
          <h2 style={{ color: '#61dafb', margin: 0, fontSize: '1.4rem' }}>Digital Nurture</h2>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>.NET & React Deep Skilling</span>
        </div>

        {navItems.map(item => (
          <NavLink 
            key={item.path} 
            to={item.path}
            style={({ isActive }) => ({
              display: 'block',
              padding: '10px 15px',
              borderRadius: '6px',
              color: isActive ? '#000000' : '#cbd5e1',
              backgroundColor: isActive ? '#61dafb' : 'transparent',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              fontSize: '0.92rem',
              transition: 'all 0.15s ease'
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </aside>

      {/* Main Workspace Display Content */}
      <main style={{ flex: 1, padding: '30px', overflowY: 'auto', backgroundColor: '#0f172a' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ex1" element={<Ex1_MyFirstReact />} />
          <Route path="/ex2" element={<Ex2_StudentApp />} />
          <Route path="/ex3" element={<Ex3_ScoreCalculatorApp />} />
          <Route path="/ex4" element={<Ex4_BlogApp />} />
          <Route path="/ex5" element={<Ex5_CohortDashboard />} />
          <Route path="/trainers-app/*" element={<Ex6_TrainersApp />} />
          <Route path="/ex6/*" element={<Ex6_TrainersApp />} /> {/* Alias route */}
          <Route path="/ex7" element={<Ex7_ShoppingApp />} />
          <Route path="/ex8" element={<Ex8_CounterApp />} />
          <Route path="/ex9" element={<Ex9_CricketApp />} />
          <Route path="/ex10" element={<Ex10_OfficeSpaceRentalApp />} />
          <Route path="/ex11" element={<Ex11_EventExamplesApp />} />
          <Route path="/ex12" element={<Ex12_TicketBookingApp />} />
          <Route path="/ex13" element={<Ex13_BloggerApp />} />
          <Route path="/ex14" element={<Ex14_EmployeeThemeApp />} />
          <Route path="/ex15" element={<Ex15_TicketRaisingApp />} />
          <Route path="/ex16" element={<Ex16_MailRegisterApp />} />
          <Route path="/ex17" element={<Ex17_FetchUserApp />} />
          <Route path="/ex18" element={<Ex18_UnitTestingGuide />} />
          <Route path="/ex19" element={<Ex19_GitClientApp />} />
        </Routes>
      </main>

    </div>
  );
};

export default App;
