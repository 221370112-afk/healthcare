import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient'); // patient or doctor

  const handleLogin = () => {
    if (email && password) {
      alert('Login Successful!');
      
      // Navigate based on user type
      if (userType === 'patient') {
        navigate('/patient-dashboard');
      } else {
        navigate('/doctor-dashboard');
      }
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, #EFF6FF, #E0E7FF)',
      padding: '20px'
    }}>
      <div style={{ 
        background: 'white', 
        padding: '40px', 
        borderRadius: '10px', 
        width: '400px',
        maxWidth: '100%',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ textAlign: 'center', color: '#4F46E5', marginBottom: '30px' }}>
          MediCare Plus
        </h1>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h2>

        {/* User Type Selection */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Login as:
          </label>
          <select 
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '12px', 
              border: '1px solid #ddd', 
              borderRadius: '5px',
              fontSize: '14px'
            }}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        {/* Email */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Email:
          </label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '12px', 
              border: '1px solid #ddd', 
              borderRadius: '5px',
              fontSize: '14px'
            }}
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Password:
          </label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '12px', 
              border: '1px solid #ddd', 
              borderRadius: '5px',
              fontSize: '14px'
            }}
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button 
          onClick={handleLogin}
          style={{
            width: '100%',
            background: '#4F46E5',
            color: 'white',
            padding: '14px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          Login
        </button>

        {/* Sign Up Link */}
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#4F46E5', fontWeight: 'bold' }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;