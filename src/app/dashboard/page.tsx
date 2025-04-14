import React from 'react';
import Map from '../components/Map'; // Import the Map component

const Dashboard = () => {
  // Example nodes data
  const nodes = [
    { id: 1, name: 'Node 1', lat: 10.3120, lng: 123.8732, noiseLevel: 35 },
    { id: 2, name: 'Node 2', lat: 10.3115, lng: 123.8725, noiseLevel: 50 },
    { id: 3, name: 'Node 3', lat: 10.3110, lng: 123.8730, noiseLevel: 80 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: 0 }}>
      <h1 style={{ margin: '16px' }}>Dashboard</h1> {/* Add margin to avoid text clashing with top */}
      <Map nodes={nodes} /> {/* Pass nodes data to the Map component */}
    </div>
  );
};

export default Dashboard;
