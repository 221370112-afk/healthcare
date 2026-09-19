import React from 'react';

function DoctorCard({ doctor }) {
  return (
    <div style={{ 
      background: 'white', 
      padding: '20px', 
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginBottom: '15px'
    }}>
      <h3 style={{ color: '#4F46E5', marginBottom: '10px' }}>{doctor.name}</h3>
      <p style={{ color: '#666', marginBottom: '8px' }}>{doctor.specialty}</p>
      <p style={{ color: '#666', marginBottom: '8px' }}>Experience: {doctor.experience} years</p>
      <p style={{ color: '#666', marginBottom: '15px' }}>Fee: ${doctor.fee}</p>
      
      <button style={{
        background: '#4F46E5',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%'
      }}>
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorCard;