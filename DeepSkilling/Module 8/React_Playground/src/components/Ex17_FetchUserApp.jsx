import React from 'react';

// Getuser class component as requested
class Getuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  fetchUser() {
    this.setState({ loading: true, error: null });
    fetch('https://api.randomuser.me/')
      .then(res => {
        if (!res.ok) throw new Error('API request failed');
        return res.json();
      })
      .then(data => {
        const result = data.results[0];
        this.setState({
          user: {
            title: result.name.title,
            firstName: result.name.first,
            lastName: result.name.last,
            image: result.picture.large,
            email: result.email,
            location: `${result.location.city}, ${result.location.country}`
          },
          loading: false
        });
      })
      .catch(err => {
        this.setState({ error: err.message, loading: false });
      });
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>Loading user profile from API...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div style={{ color: '#ef4444', textAlign: 'center', padding: '20px' }}>
          <p>Error: {error}</p>
          <button 
            onClick={() => this.fetchUser()}
            style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#333', color: '#fff', border: '1px solid #555', cursor: 'pointer' }}
          >
            Retry Fetch
          </button>
        </div>
      );
    }

    return (
      <div style={{
        maxWidth: '350px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        backgroundColor: 'rgba(255,255,255,0.02)',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}>
        <img 
          src={user.image} 
          alt={user.firstName} 
          style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #61dafb', marginBottom: '15px' }}
        />
        <h3 style={{ textTransform: 'capitalize', color: '#fff', margin: '0 0 5px 0' }}>
          {user.title}. {user.firstName} {user.lastName}
        </h3>
        <p style={{ color: '#61dafb', fontSize: '0.9rem', margin: '0 0 10px 0', fontWeight: 'bold' }}>
          📧 {user.email}
        </p>
        <p style={{ color: '#aaa', fontSize: '0.85rem', margin: '0 0 20px 0' }}>
          📍 {user.location}
        </p>
        
        <button 
          onClick={() => this.fetchUser()}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            backgroundColor: '#61dafb',
            color: '#000',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Fetch Another User
        </button>
      </div>
    );
  }
}

const Ex17_FetchUserApp = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Fetch User Application (Consuming REST APIs)
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        This class component retrieves user details asynchronously in `componentDidMount()`:
      </p>
      <Getuser />
    </div>
  );
};

export default Ex17_FetchUserApp;
export { Getuser };
