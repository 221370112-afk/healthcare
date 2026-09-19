import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '40px'
    }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ fontSize: '120px', margin: '0', fontWeight: 'bold' }}>404</h1>
        <h2 style={{ fontSize: '36px', marginTop: '20px' }}>Page Not Found</h2>
        <p style={{ fontSize: '18px', marginTop: '15px', opacity: 0.9 }}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" style={{
          display: 'inline-block',
          marginTop: '30px',
          background: 'white',
          color: '#667eea',
          padding: '15px 40px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: 'bold',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;