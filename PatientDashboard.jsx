import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PatientDashboard() {
  const navigate = useNavigate();
  const [appointments] = useState([
    { id: 1, doctor: 'Dr. Sarah Johnson', date: '2024-01-15', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, doctor: 'Dr. Michael Chen', date: '2024-01-20', time: '02:00 PM', status: 'Pending' }
  ]);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', minHeight: '70vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#4F46E5' }}>Patient Dashboard</h1>
        <button 
          onClick={handleLogout}
          style={{
            background: '#EF4444',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
      
      {/* Profile Card */}
      <div style={{ 
        background: 'white', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '30px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3>Welcome, John Doe!</h3>
        <p style={{ color: '#666', marginTop: '5px' }}>Email: john@example.com</p>
        <p style={{ color: '#666', marginTop: '5px' }}>Blood Group: A+</p>
        <p style={{ color: '#666', marginTop: '5px' }}>Age: 35 years</p>
      </div>

      {/* Appointments */}
      <div style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>My Appointments</h2>
          <button style={{
            background: '#4F46E5',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Book New
          </button>
        </div>

        {appointments.map(apt => (
          <div key={apt.id} style={{ 
            padding: '20px', 
            border: '1px solid #eee',
            borderRadius: '8px',
            marginBottom: '15px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <h3 style={{ margin: '0 0 10px 0' }}>{apt.doctor}</h3>
                <p style={{ color: '#666', margin: '5px 0' }}>Date: {apt.date}</p>
                <p style={{ color: '#666', margin: '5px 0' }}>Time: {apt.time}</p>
              </div>
              <span style={{ 
                background: apt.status === 'Confirmed' ? '#10B981' : '#F59E0B',
                color: 'white',
                padding: '6px 15px',
                borderRadius: '20px',
                fontSize: '14px'
              }}>
                {apt.status}
              </span>
            </div>
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <button style={{
                flex: 1,
                background: '#4F46E5',
                color: 'white',
                padding: '8px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Reschedule
              </button>
              <button style={{
                flex: 1,
                background: '#EF4444',
                color: 'white',
                padding: '8px',
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
    </div>
  );
}

export default PatientDashboard;