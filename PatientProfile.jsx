import React, { useState } from 'react';

function PatientProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    age: 35,
    bloodGroup: 'A+'
  });

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ 
        background: 'white', 
        padding: '30px', 
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#4F46E5', margin: 0 }}>My Profile</h2>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            style={{
              background: '#4F46E5',
              color: 'white',
              padding: '8px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Name:</strong> 
          {isEditing ? (
            <input 
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              style={{ marginLeft: '10px', padding: '5px', border: '1px solid #ddd', borderRadius: '3px' }}
            />
          ) : (
            <span style={{ marginLeft: '10px' }}>{profile.name}</span>
          )}
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Email:</strong> <span style={{ marginLeft: '10px' }}>{profile.email}</span>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Phone:</strong> 
          {isEditing ? (
            <input 
              type="text"
              value={profile.phone}
              onChange={(e) => setProfile({...profile, phone: e.target.value})}
              style={{ marginLeft: '10px', padding: '5px', border: '1px solid #ddd', borderRadius: '3px' }}
            />
          ) : (
            <span style={{ marginLeft: '10px' }}>{profile.phone}</span>
          )}
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Age:</strong> <span style={{ marginLeft: '10px' }}>{profile.age}</span>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Blood Group:</strong> <span style={{ marginLeft: '10px' }}>{profile.bloodGroup}</span>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;