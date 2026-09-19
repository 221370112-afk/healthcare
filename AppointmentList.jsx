import React from 'react';

function AppointmentList({ appointments }) {
  if (!appointments || appointments.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
        <p>No appointments found</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#4F46E5', marginBottom: '20px' }}>My Appointments</h2>
      
      {appointments.map(apt => (
        <div key={apt.id} style={{ 
          background: 'white', 
          padding: '20px', 
          marginBottom: '15px',
          borderRadius: '10px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>{apt.name}</h3>
          <p style={{ color: '#666', margin: '5px 0' }}>Date: {apt.date}</p>
          <p style={{ color: '#666', margin: '5px 0' }}>Time: {apt.time}</p>
          <p style={{ color: '#666', margin: '5px 0' }}>Email: {apt.email}</p>
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            <button style={{
              background: '#4F46E5',
              color: 'white',
              padding: '8px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Reschedule
            </button>
            <button style={{
              background: '#EF4444',
              color: 'white',
              padding: '8px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppointmentList;