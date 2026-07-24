import React, { useState } from 'react';
import axios from 'axios';

// GitClient class wrapping axios calls (Exercise 19 requirement)
class GitClient {
  static getRepositories(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(error.response?.data?.message || error.message);
      });
  }
}

const Ex19_GitClientApp = () => {
  const [username, setUsername] = useState('Koushal2410');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = () => {
    if (!username.trim()) return;
    setLoading(true);
    setError(null);
    setRepos([]);

    GitClient.getRepositories(username)
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  const testSuiteCode = `// src/GitClient.test.js
import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const dummyRepos = [
      { id: 101, name: 'react-hands-on' },
      { id: 102, name: 'dotnet-webapi-core' }
    ];
    
    // Mock the axios get request
    axios.get.mockResolvedValue({ data: dummyRepos });

    const result = await GitClient.getRepositories('techiesyed');
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('react-hands-on');
    expect(result[1].name).toBe('dotnet-webapi-core');
  });
});`;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        GitHub Repository Client & Mocking (Exercise 19)
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        Fetch real-time GitHub repository lists using Axios, or review the Jest Mocking unit test configuration below:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ padding: '15px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
          <h3>GitHub API Playground</h3>
          <div style={{ display: 'flex', gap: '10px', margin: '15px 0' }}>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub Username"
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: '#fff', flex: 1 }}
            />
            <button 
              onClick={handleFetch}
              style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#61dafb', border: 'none', color: '#000', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Fetch Repos
            </button>
          </div>

          {loading && <p>Fetching repository list from GitHub...</p>}
          {error && <p style={{ color: '#ef4444' }}>⚠️ Error: {error}</p>}
          
          <div style={{ maxHeight: '250px', overflowY: 'auto', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '10px', backgroundColor: '#000' }}>
            {repos.length === 0 && !loading && !error && (
              <p style={{ color: '#555', margin: 0, textAlign: 'center' }}>No repos loaded. Click "Fetch Repos".</p>
            )}
            {repos.map(r => (
              <div key={r.id} style={{ padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.9rem' }}>
                📁 <a href={r.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb', textDecoration: 'none' }}>{r.name}</a>
                {r.description && <div style={{ fontSize: '0.8rem', color: '#888' }}>{r.description}</div>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '15px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
          <h3>Axios Mock Testing Code</h3>
          <pre style={{ backgroundColor: '#111', padding: '12px', borderRadius: '6px', overflowX: 'auto', color: '#88ef88', fontSize: '0.8rem', margin: 0, maxHeight: '350px' }}>
            <code>{testSuiteCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Ex19_GitClientApp;
export { GitClient };
