import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
      color: 'white', 
      padding: '60px 40px 30px'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* About Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '10px',
                borderRadius: '10px'
              }}>
                <FaHeart size={24} />
              </div>
              <h3 style={{ 
                margin: 0,
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                MediCare Plus
              </h3>
            </div>
            <p style={{ color: '#9CA3AF', lineHeight: '1.8', fontSize: '15px' }}>
              Your trusted healthcare partner providing quality medical services with care and compassion.
            </p>
            
            {/* Social Media */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '25px' }}>
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <div key={index} style={{
                  background: 'rgba(102, 126, 234, 0.2)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(102, 126, 234, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ 
              marginBottom: '25px',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              Quick Links
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              margin: 0
            }}>
              {['About Us', 'Our Doctors', 'Services', 'Departments', 'Contact Us'].map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ 
                    color: '#9CA3AF', 
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#667eea'}
                  onMouseOut={(e) => e.target.style.color = '#9CA3AF'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ 
              marginBottom: '25px',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              Our Services
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              margin: 0
            }}>
              {['Cardiology', 'General Medicine', 'Pediatrics', 'Emergency Care', 'Laboratory'].map((service, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ 
                    color: '#9CA3AF', 
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#667eea'}
                  onMouseOut={(e) => e.target.style.color = '#9CA3AF'}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ 
              marginBottom: '25px',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              Contact Us
            </h4>
            <div style={{ space: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '18px' }}>
                <FaPhone size={16} style={{ color: '#667eea', marginTop: '4px' }} />
                <div>
                  <p style={{ margin: 0, color: '#9CA3AF', fontSize: '15px' }}>
                    +1 (555) 123-4567
                  </p>
                  <p style={{ margin: '4px 0 0 0', color: '#9CA3AF', fontSize: '15px' }}>
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <FaEnvelope size={16} style={{ color: '#667eea' }} />
                <p style={{ margin: 0, color: '#9CA3AF', fontSize: '15px' }}>
                  info@medicareplus.com
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <FaMapMarkerAlt size={16} style={{ color: '#667eea', marginTop: '4px' }} />
                <p style={{ margin: 0, color: '#9CA3AF', fontSize: '15px', lineHeight: '1.6' }}>
                  123 Medical Center,<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div style={{ 
          borderTop: '1px solid #374151',
          borderBottom: '1px solid #374151',
          padding: '40px 0',
          marginBottom: '30px'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>
              Subscribe to Our Newsletter
            </h3>
            <p style={{ color: '#9CA3AF', marginBottom: '25px', fontSize: '15px' }}>
              Get the latest health tips and updates delivered to your inbox
            </p>
            <div style={{ 
              display: 'flex',
              gap: '12px',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <input 
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '14px 20px',
                  border: '2px solid #374151',
                  borderRadius: '50px',
                  background: 'transparent',
                  color: 'white',
                  fontSize: '15px',
                  outline: 'none'
                }}
              />
              <button style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '14px 35px',
                border: 'none',
                borderRadius: '50px',
                fontSize: '15px',
                fontWeight: 'bold',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ 
          textAlign: 'center',
          color: '#9CA3AF',
          fontSize: '15px'
        }}>
          <p style={{ margin: 0 }}>
            © 2024 MediCare Plus. All rights reserved. | Designed with ❤️ for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;