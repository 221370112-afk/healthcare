import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ 
      position: isSticky ? 'fixed' : 'relative',
      top: 0,
      width: '100%',
      background: isSticky ? 'rgba(255, 255, 255, 0.95)' : 'white',
      padding: '18px 40px', 
      boxShadow: isSticky ? '0 5px 20px rgba(0,0,0,0.1)' : '0 2px 5px rgba(0,0,0,0.05)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 999,
      transition: 'all 0.3s ease',
      backdropFilter: isSticky ? 'blur(10px)' : 'none'
    }}>
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '10px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <FaHeart color="white" size={24} />
        </div>
        <h2 style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: 0,
          fontSize: '28px',
          fontWeight: 'bold'
        }}>
          MediCare Plus
        </h2>
      </Link>
      
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Link to="/" style={{ 
          color: '#333', 
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: '500',
          transition: 'color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.color = '#667eea'}
        onMouseOut={(e) => e.target.style.color = '#333'}
        >
          Home
        </Link>
        <Link to="/services" style={{ 
          color: '#333', 
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: '500',
          transition: 'color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.color = '#667eea'}
        onMouseOut={(e) => e.target.style.color = '#333'}
        >
          Services
        </Link>
        <Link to="/about" style={{ 
          color: '#333', 
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: '500',
          transition: 'color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.color = '#667eea'}
        onMouseOut={(e) => e.target.style.color = '#333'}
        >
          About
        </Link>
        <Link to="/login" style={{ 
          color: '#667eea', 
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: '600',
          transition: 'color 0.3s'
        }}>
          Login
        </Link>
        <Link to="/signup" style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white', 
          padding: '12px 28px', 
          borderRadius: '50px',
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 5px 15px rgba(102, 126, 234, 0.3)',
          transition: 'transform 0.3s'
        }}
        onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;