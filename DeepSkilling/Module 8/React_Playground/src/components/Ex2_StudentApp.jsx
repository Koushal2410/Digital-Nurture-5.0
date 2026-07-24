import React from 'react';

// Subcomponents as specified by Exercise 2
const Home = () => (
  <div style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '15px', borderRadius: '8px', margin: '10px 0', backgroundColor: 'rgba(255,255,255,0.02)' }}>
    <h3>Home Component</h3>
    <p>Welcome to the Home page of Student Management Portal</p>
  </div>
);

const About = () => (
  <div style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '15px', borderRadius: '8px', margin: '10px 0', backgroundColor: 'rgba(255,255,255,0.02)' }}>
    <h3>About Component</h3>
    <p>Welcome to the About page of the Student Management Portal</p>
  </div>
);

const Contact = () => (
  <div style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '15px', borderRadius: '8px', margin: '10px 0', backgroundColor: 'rgba(255,255,255,0.02)' }}>
    <h3>Contact Component</h3>
    <p>Welcome to the Contact page of the Student Management Portal</p>
  </div>
);

const Ex2_StudentApp = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Student Management Portal (StudentApp)
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        This app invokes and displays all three sub-components (Home, About, Contact):
      </p>
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default Ex2_StudentApp;
export { Home, About, Contact };
