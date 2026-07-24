import React, { useState } from 'react';

// Subcomponents as requested by Exercise 13
const BookDetails = () => (
  <div style={{ padding: '15px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
    <h3 style={{ color: '#61dafb' }}>📚 Recommended Book Publications</h3>
    <ul style={{ lineHeight: '1.8' }}>
      <li><strong>C# 12 in a Nutshell</strong> - Joseph Albahari (O'Reilly Media)</li>
      <li><strong>Pro ASP.NET Core 8</strong> - Adam Freeman (Apress)</li>
      <li><strong>Designing Data-Intensive Applications</strong> - Martin Kleppmann</li>
    </ul>
  </div>
);

const BlogDetails = () => (
  <div style={{ padding: '15px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
    <h3 style={{ color: '#61dafb' }}>✍️ Technical Blogs</h3>
    <ul style={{ lineHeight: '1.8' }}>
      <li><strong>Microsoft .NET Blog</strong> - devblogs.microsoft.com/dotnet</li>
      <li><strong>React Official Blog</strong> - react.dev/blog</li>
      <li><strong>Martin Fowler's Architecture Guide</strong> - martinfowler.com</li>
    </ul>
  </div>
);

const CourseDetails = () => (
  <div style={{ padding: '15px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
    <h3 style={{ color: '#61dafb' }}>🎓 Online Learning Courses</h3>
    <ul style={{ lineHeight: '1.8' }}>
      <li><strong>Cognizant Digital Nurture 5.0</strong> - .NET Full Stack React Course</li>
      <li><strong>Frontend React Engineer [101-BASIC]</strong> - Skill Spring Syllabus</li>
      <li><strong>Docker & Kubernetes Bootcamp</strong> - Platform Infrastructure Stream</li>
    </ul>
  </div>
);

const Ex13_BloggerApp = () => {
  const [activeTab, setActiveTab] = useState('book');

  // Conditional rendering helper
  const renderDetails = () => {
    switch (activeTab) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <BookDetails />;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Blogger Portal (Conditional Component Rendering)
      </h2>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={() => setActiveTab('book')}
          style={{
            padding: '10px 18px',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: activeTab === 'book' ? '#61dafb' : '#333',
            color: activeTab === 'book' ? '#000' : '#fff',
            fontWeight: 'bold',
            border: 'none'
          }}
        >
          Books Publication
        </button>
        <button 
          onClick={() => setActiveTab('blog')}
          style={{
            padding: '10px 18px',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: activeTab === 'blog' ? '#61dafb' : '#333',
            color: activeTab === 'blog' ? '#000' : '#fff',
            fontWeight: 'bold',
            border: 'none'
          }}
        >
          Technical Blogs
        </button>
        <button 
          onClick={() => setActiveTab('course')}
          style={{
            padding: '10px 18px',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: activeTab === 'course' ? '#61dafb' : '#333',
            color: activeTab === 'course' ? '#000' : '#fff',
            fontWeight: 'bold',
            border: 'none'
          }}
        >
          Learning Courses
        </button>
      </div>

      <div style={{ minHeight: '180px' }}>
        {renderDetails()}
      </div>
    </div>
  );
};

export default Ex13_BloggerApp;
export { BookDetails, BlogDetails, CourseDetails };
