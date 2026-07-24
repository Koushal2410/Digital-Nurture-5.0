import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
      limit: 5
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => {
        this.setState({ error: error.message });
        alert(`Error loading posts: ${error.message}`);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    console.error("Caught error: ", error, info);
    alert(`An error occurred in the Posts component: ${error.toString()}`);
    this.setState({ error: error.toString() });
  }

  render() {
    const { posts, error, limit } = this.state;
    
    if (error) {
      return (
        <div style={{ color: '#ef4444', padding: '10px', border: '1px solid #ef4444', borderRadius: '4px' }}>
          <h4>Error Loading Blogs</h4>
          <p>{error}</p>
        </div>
      );
    }

    const displayedPosts = posts.slice(0, limit);

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3 style={{ color: '#61dafb', margin: 0 }}>Latest Blog Posts</h3>
          <div>
            <label style={{ marginRight: '10px' }}>Show limit:</label>
            <select 
              value={limit} 
              onChange={(e) => this.setState({ limit: Number(e.target.value) })}
              style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#222', color: '#fff', border: '1px solid #555' }}
            >
              <option value="5">5 Posts</option>
              <option value="10">10 Posts</option>
              <option value="20">20 Posts</option>
            </select>
          </div>
        </div>

        {displayedPosts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          displayedPosts.map(post => (
            <div 
              key={post.id} 
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px',
                backgroundColor: 'rgba(255,255,255,0.01)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              <h4 style={{ textTransform: 'capitalize', color: '#fff', marginTop: 0, marginBottom: '8px' }}>
                {post.id}. {post.title}
              </h4>
              <p style={{ color: '#aaa', margin: 0, fontSize: '0.95rem', lineHeight: '1.4' }}>
                {post.body}
              </p>
            </div>
          ))
        )}
      </div>
    );
  }
}

const Ex4_BlogApp = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Blog Application (componentDidMount & componentDidCatch)
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        This page fetches data from JSONPlaceholder API and handles rendering in a class component:
      </p>
      <Posts />
    </div>
  );
};

export default Ex4_BlogApp;
export { Posts };
