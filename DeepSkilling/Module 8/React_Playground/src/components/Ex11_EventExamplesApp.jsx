import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [inr, setInr] = useState('');
  const [eur, setEur] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple conversion rate: 1 INR = 0.011 EUR
    const conversionRate = 0.011;
    setEur((Number(inr) * conversionRate).toFixed(2));
  };

  return (
    <div style={{ marginTop: '25px', padding: '15px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
      <h3>Rupee to Euro Currency Converter</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input 
          type="number" 
          placeholder="Enter Amount in INR" 
          value={inr}
          onChange={(e) => setInr(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: '#fff', flex: 1 }}
          required
        />
        <button 
          type="submit"
          style={{ padding: '8px 15px', borderRadius: '4px', backgroundColor: '#3b82f6', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Convert
        </button>
      </form>
      {eur > 0 && (
        <div style={{ marginTop: '15px', fontSize: '1.2rem', fontWeight: 'bold', color: '#4ade80' }}>
          € {eur} EUR
        </div>
      )}
    </div>
  );
};

const Ex11_EventExamplesApp = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');

  // Multiple functions for increment
  const incrementValue = () => setCounter(prev => prev + 1);
  const sayHello = () => setMessage('Hello, counter incremented!');

  const handleMultipleEvents = () => {
    incrementValue();
    sayHello();
  };

  const handleDecrement = () => {
    setCounter(prev => prev - 1);
    setMessage('Counter decremented!');
  };

  const handleSayWelcome = (msg) => {
    alert(`Welcome message: ${msg}`);
  };

  const handleSyntheticEvent = (e) => {
    alert(`Synthetic Event Type: ${e.type} - I was clicked`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Event Examples & Currency Converter
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ padding: '15px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
          <h3>Counter & Multi-method Invocation</h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '15px 0' }}>
            Count: {counter}
          </div>
          {message && <p style={{ color: '#4ade80', fontSize: '0.9rem' }}>{message}</p>}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={handleMultipleEvents}
              style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#4ade80', border: 'none', color: '#000', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Increment (Multi-method)
            </button>
            <button 
              onClick={handleDecrement}
              style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#ef4444', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Decrement
            </button>
          </div>
        </div>

        <div style={{ padding: '15px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
          <h3>Arguments & Synthetic Events</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
            <button 
              onClick={() => handleSayWelcome('welcome')}
              style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#61dafb', border: 'none', color: '#000', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Say Welcome (Pass Parameter)
            </button>
            <button 
              onClick={handleSyntheticEvent}
              style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#f59e0b', border: 'none', color: '#000', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Trigger OnPress Synthetic Event
            </button>
          </div>
        </div>
      </div>

      <CurrencyConverter />
    </div>
  );
};

export default Ex11_EventExamplesApp;
export { CurrencyConverter };
