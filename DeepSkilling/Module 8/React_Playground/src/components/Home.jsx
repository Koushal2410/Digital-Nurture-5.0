import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const exercises = [
    { num: 1, title: 'MyFirstReact', desc: 'Environment setup & printing welcome message.' },
    { num: 2, title: 'StudentApp', desc: 'Nested Home, About, and Contact components rendering.' },
    { num: 3, title: 'ScoreCalculator', desc: 'Calculates performance score with custom styling props.' },
    { num: 4, title: 'BlogApp', desc: 'Class lifecycle componentDidMount & componentDidCatch REST fetch.' },
    { num: 5, title: 'CohortDashboard', desc: 'Cohort details styled dynamically via CSS Modules.' },
    { num: 6, title: 'TrainersApp', desc: 'Trainer profile list and details using React Router useParams.' },
    { num: 7, title: 'ShoppingApp', desc: 'Online shopping cart displaying item array via nested components.' },
    { num: 8, title: 'CounterApp', desc: 'Mall entries/exits counter updating state.' },
    { num: 9, title: 'CricketApp', desc: 'ES6 destructured lists, spread merging, and conditional flag rendering.' },
    { num: 10, title: 'OfficeSpaceRental', desc: 'Office spaces list rendering custom rents in Red/Green.' },
    { num: 11, title: 'EventExamples', desc: 'Synthetics events, arguments, and INR-to-EUR Currency Converter.' },
    { num: 12, title: 'TicketBooking', desc: '🔓 Logged in User Booking vs 🔒 Guest view.' },
    { num: 13, title: 'BloggerApp', desc: 'Books, Blogs, and Courses toggled via conditional rendering.' },
    { num: 14, title: 'EmployeeTheme', desc: 'Prop-less button theme propagation using ThemeContext Provider.' },
    { num: 15, title: 'TicketRaising', desc: 'Complaint registration controlled form generating random REF numbers.' },
    { num: 16, title: 'MailRegister', desc: 'Registration form validation handling Name, Email, Password.' },
    { num: 17, title: 'FetchUser', desc: 'Consumes api.randomuser.me profile fetching inside lifecycle hook.' },
    { num: 18, title: 'UnitTesting', desc: 'Jest and Enzyme test suites and wrapper matchers documentation.' },
    { num: 19, title: 'GitClient', desc: 'Axios API repository client with mock test assertions.' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        padding: '30px',
        borderRadius: '15px',
        background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.15), rgba(59, 130, 246, 0.15))',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#61dafb', margin: '0 0 10px 0', fontSize: '2.5rem' }}>React Playgrounds & Labs</h1>
        <p style={{ color: '#aaa', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Welcome to the unified Hands-on playground. Here you can explore, test, and interact with all 19 React labs assigned in the CTS Digital Nurture 5.0 handbook.
        </p>
      </div>

      <h2 style={{ marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
        Select a Lab Exercise
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {exercises.map((ex) => (
          <Link 
            key={ex.num} 
            to={`/ex${ex.num}`} 
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block'
            }}
          >
            <div style={{
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.1)',
              backgroundColor: 'rgba(255,255,255,0.02)',
              transition: 'all 0.2s ease',
              height: '100%',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = '#61dafb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <span style={{ fontSize: '0.8rem', color: '#61dafb', fontWeight: 'bold' }}>LAB {ex.num}</span>
                <span style={{ fontSize: '1.2rem' }}>⚡</span>
              </div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: '#fff' }}>{ex.title}</h3>
              <p style={{ margin: 0, color: '#aaa', fontSize: '0.9rem', lineHeight: '1.4' }}>{ex.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
