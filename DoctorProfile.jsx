import React from 'react';

function DoctorProfile() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ 
        background: 'white', 
        padding: '30px', 
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#4F46E5', marginBottom: '20px' }}>Doctor Profile</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Name:</strong> Dr. Sarah Johnson
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>Specialty:</strong> Cardiology
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>Email:</strong> dr.sarah@medicareplus.com
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>Phone:</strong> +1 (555) 123-4567
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>Experience:</strong> 15 years
        </div>
        
        <button style={{
          background: '#4F46E5',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default DoctorProfile;