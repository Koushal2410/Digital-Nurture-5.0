import React from 'react';

const Ex18_UnitTestingGuide = () => {
  const setupCode = `// src/setupTests.js
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });`;

  const testCode = `// src/CohortDetails.test.js
import React from 'react';
import { mount, shallow } from 'enzyme';
import CohortDetails from './CohortDetails';

describe('Cohort Details Component', () => {
  const dummyCohort = {
    id: 1,
    name: 'DotNet FSE React Cohort 1',
    status: 'ongoing',
    startDate: '2026-06-01',
    duration: '12 weeks'
  };

  // Test 1: Should load in isolation
  test('should create the component', () => {
    const wrapper = shallow(<CohortDetails cohort={dummyCohort} />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test 2: Should mount component and assign props
  test('should initialize the props', () => {
    const wrapper = mount(<CohortDetails cohort={dummyCohort} />);
    expect(wrapper.props().cohort).toEqual(dummyCohort);
  });

  // Test 3: Should display cohort code in h3
  test('should display cohort code in h3', () => {
    const wrapper = mount(<CohortDetails cohort={dummyCohort} />);
    const h3 = wrapper.find('h3');
    expect(h3.text()).toBe('DotNet FSE React Cohort 1');
  });

  // Test 4: Snapshot test
  test('should always render same html', () => {
    const wrapper = shallow(<CohortDetails cohort={dummyCohort} />);
    expect(wrapper).toMatchSnapshot();
  });
});`;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Unit Testing with Jest & Enzyme (Exercise 18)
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        This page documents the Jest and Enzyme testing configuration required to run automated cohort tests:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        <div style={{ padding: '15px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
          <h3 style={{ color: '#61dafb', margin: '0 0 10px 0' }}>1. Enzyme Setup configuration</h3>
          <pre style={{ backgroundColor: '#111', padding: '15px', borderRadius: '6px', overflowX: 'auto', color: '#61dafb', fontSize: '0.9rem' }}>
            <code>{setupCode}</code>
          </pre>
        </div>

        <div style={{ padding: '15px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
          <h3 style={{ color: '#61dafb', margin: '0 0 10px 0' }}>2. Cohort Details Test Suite</h3>
          <pre style={{ backgroundColor: '#111', padding: '15px', borderRadius: '6px', overflowX: 'auto', color: '#88ef88', fontSize: '0.9rem' }}>
            <code>{testCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Ex18_UnitTestingGuide;
