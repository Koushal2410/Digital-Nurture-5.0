import React, { useState } from 'react';

// Register component as requested by Exercise 16
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    
    // 1. Name validation: >= 5 characters
    if (name.length < 5) {
      tempErrors.name = 'Name should have at least 5 characters.';
    }

    // 2. Email validation: contains '@' and '.'
    if (!email.includes('@') || !email.includes('.')) {
      tempErrors.email = 'Email should contain both "@" and "."';
    }

    // 3. Password validation: >= 8 characters
    if (password.length < 8) {
      tempErrors.password = 'Password should have at least 8 characters.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Registration Successful!\nWelcome, ${name}!`);
      // Reset form
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
      <h3 style={{ color: '#61dafb', margin: '0 0 15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
        Create Account (Register)
      </h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: '#fff' }}
          />
          {errors.name && <div style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '4px' }}>⚠️ {errors.name}</div>}
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email Address:</label>
          <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: '#fff' }}
          />
          {errors.email && <div style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '4px' }}>⚠️ {errors.email}</div>}
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: '#fff' }}
          />
          {errors.password && <div style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '4px' }}>⚠️ {errors.password}</div>}
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
          Register Mail
        </button>
      </form>
    </div>
  );
};

const Ex16_MailRegisterApp = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Mail Register Application (Form Validation)
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        This page validates inputs on submit and displays error alerts or confirmation messages:
      </p>
      <Register />
    </div>
  );
};

export default Ex16_MailRegisterApp;
export { Register };
