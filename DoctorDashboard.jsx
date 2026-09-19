import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorDashboard() {
  const navigate = useNavigate();
  const [appointments] = useState([
    { id: 1, patient: 'John Doe', date: '2024-01-15', time: '10:00 AM', status: 'Pending' },
    { id: 2, patient: 'Jane Smith', date: '2024-01-15', time: '11:00 AM', status: 'Confirmed' },
    { id: 3, patient: 'Robert Johnson', date: '2024-01-15', time: '02:00 PM', status: 'Pending' }
  ]);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', minHeight: '70vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ color: '#4F46E5', margin: 0 }}>Doctor Dashboard</h1>
          <p style={{ color: '#666', marginTop: '5px' }}>Dr. Sarah Johnson - Cardiology</p>
        </div>
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

      {/* Stats */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#4F46E5', fontSize: '32px', margin: 0 }}>156</h3>
          <p style={{ color: '#666', marginTop: '8px' }}>Total Patients</p>
        </div>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#4F46E5', fontSize: '32px', margin: 0 }}>12</h3>
          <p style={{ color: '#666', marginTop: '8px' }}>Today's Appointments</p>
        </div>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#10B981', fontSize: '32px', margin: 0 }}>5</h3>
          <p style={{ color: '#666', marginTop: '8px' }}>Completed</p>
        </div>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#F59E0B', fontSize: '32px', margin: 0 }}>7</h3>
          <p style={{ color: '#666', marginTop: '8px' }}>Pending</p>
        </div>
      </div>

      {/* Appointments */}
      <div style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '20px' }}>Today's Appointments</h2>
        
        {appointments.map(apt => (
          <div key={apt.id} style={{ 
            padding: '20px', 
            border: '1px solid #eee',
            borderRadius: '8px',
            marginBottom: '15px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
              <div>
                <h3 style={{ margin: '0 0 5px 0' }}>{apt.patient}</h3>
                <p style={{ color: '#666', margin: 0 }}>{apt.date} at {apt.time}</p>
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

            {apt.status === 'Pending' && (
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{
                  flex: 1,
                  background: '#10B981',
                  color: 'white',
                  padding: '8px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>
                  Confirm
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorDashboard;