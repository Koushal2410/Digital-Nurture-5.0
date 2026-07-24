import React from 'react';

// CountPeople class component as requested
class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };

    // Binding methods
    this.UpdateEntry = this.UpdateEntry.bind(this);
    this.UpdateExit = this.UpdateExit.bind(this);
  }

  UpdateEntry() {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  UpdateExit() {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    return (
      <div style={{
        maxWidth: '450px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        backgroundColor: 'rgba(255,255,255,0.02)',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
      }}>
        <h3 style={{ color: '#61dafb', marginBottom: '20px' }}>Mall People Counter</h3>
        
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '25px' }}>
          <div style={{ padding: '15px', borderRadius: '8px', backgroundColor: 'rgba(74, 222, 128, 0.1)', width: '130px' }}>
            <div style={{ fontSize: '0.9rem', color: '#888' }}>Total Entries</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4ade80' }}>
              {this.state.entrycount}
            </div>
          </div>
          <div style={{ padding: '15px', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.1)', width: '130px' }}>
            <div style={{ fontSize: '0.9rem', color: '#888' }}>Total Exits</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444' }}>
              {this.state.exitcount}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
          <button 
            onClick={this.UpdateEntry} 
            style={{
              padding: '12px 25px',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '6px',
              cursor: 'pointer',
              border: 'none',
              backgroundColor: '#4ade80',
              color: '#000',
              flex: 1
            }}
          >
            Login (Enter Mall)
          </button>
          <button 
            onClick={this.UpdateExit} 
            style={{
              padding: '12px 25px',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '6px',
              cursor: 'pointer',
              border: 'none',
              backgroundColor: '#ef4444',
              color: '#fff',
              flex: 1
            }}
          >
            Exit (Leave Mall)
          </button>
        </div>
      </div>
    );
  }
}

const Ex8_CounterApp = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Counter Application (React State)
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        This class component manages counts for entries/exits using local state:
      </p>
      <CountPeople />
    </div>
  );
};

export default Ex8_CounterApp;
export { CountPeople };
