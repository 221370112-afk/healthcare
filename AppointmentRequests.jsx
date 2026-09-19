import React, { useState } from 'react';

function AppointmentRequest() {
  const [requests] = useState([
    { id: 1, patient: 'John Doe', date: '2024-01-15', time: '10:00 AM' },
    { id: 2, patient: 'Jane Smith', date: '2024-01-16', time: '02:00 PM' }
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#4F46E5', marginBottom: '20px' }}>Appointment Requests</h2>
      
      {requests.map(req => (
        <div key={req.id} style={{ 
          background: 'white', 
          padding: '20px', 
          marginBottom: '15px',
          borderRadius: '10px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <h3>{req.patient}</h3>
          <p style={{ color: '#666' }}>{req.date} at {req.time}</p>
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            <button style={{
              background: '#10B981',
              color: 'white',
              padding: '8px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Accept
            </button>
            <button style={{
              background: '#EF4444',
              color: 'white',
              padding: '8px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppointmentRequest;