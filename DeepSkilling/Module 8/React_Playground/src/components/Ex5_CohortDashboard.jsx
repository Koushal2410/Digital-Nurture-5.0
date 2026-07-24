import React from 'react';
import styles from './CohortDetails.module.css';

const Ex5_CohortDashboard = () => {
  const cohorts = [
    { id: 1, name: 'DotNet FSE React Cohort 1', status: 'ongoing', startDate: '2026-06-01', duration: '12 weeks' },
    { id: 2, name: 'Java Cloud Native Cohort 5', status: 'completed', startDate: '2026-02-15', duration: '14 weeks' },
    { id: 3, name: 'Python GenAI Cohort 3', status: 'ongoing', startDate: '2026-07-05', duration: '8 weeks' },
    { id: 4, name: 'AWS Cloud Architect Cohort 2', status: 'completed', startDate: '2025-10-10', duration: '16 weeks' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Cohort Dashboard (CSS Modules & Styles)
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        This cohort list demonstrates importing CSS Modules and conditionally coloring the heading:
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {cohorts.map((cohort) => (
          <div key={cohort.id} className={styles.box}>
            <h3 style={{ 
              color: cohort.status === 'ongoing' ? '#4ade80' : '#3b82f6', 
              marginTop: 0,
              fontSize: '1.2rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '8px'
            }}>
              {cohort.name}
            </h3>
            <dl style={{ margin: 0 }}>
              <dt className={styles.box.dt}>Status</dt>
              <dd style={{ textTransform: 'capitalize' }}>{cohort.status}</dd>

              <dt className={styles.box.dt}>Start Date</dt>
              <dd>{cohort.startDate}</dd>

              <dt className={styles.box.dt}>Duration</dt>
              <dd>{cohort.duration}</dd>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ex5_CohortDashboard;
