import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserMd, FaHospital, FaAward, FaClock, FaHeart,
  FaLinkedinIn, FaTwitter, FaEnvelope, FaCheckCircle 
} from 'react-icons/fa';

function About() {
  const [counters, setCounters] = useState({
    doctors: 0,
    patients: 0,
    experience: 0,
    services: 0
  });

  const statsData = [
    { key: 'doctors', icon: FaUserMd, target: 50, label: 'Expert Doctors', suffix: '+' },
    { key: 'patients', icon: FaHeart, target: 10000, label: 'Happy Patients', suffix: '+' },
    { key: 'experience', icon: FaClock, target: 15, label: 'Years Experience', suffix: '+' },
    { key: 'services', icon: FaHospital, target: 24, label: '24/7 Service', suffix: '' }
  ];

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Chief Cardiologist',
      image: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg',
      experience: '15+ years',
      education: 'MD, Harvard Medical School',
      linkedin: '#',
      twitter: '#',
      email: 'sarah.johnson@medicareplus.com'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Senior Neurosurgeon',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg',
      experience: '12+ years',
      education: 'MD, Johns Hopkins',
      linkedin: '#',
      twitter: '#',
      email: 'michael.chen@medicareplus.com'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Head of Pediatrics',
      image: 'https://img.freepik.com/free-photo/smiling-doctor-with-stethoscope-isolated-grey_651396-974.jpg',
      experience: '10+ years',
      education: 'MD, Stanford University',
      linkedin: '#',
      twitter: '#',
      email: 'emily.rodriguez@medicareplus.com'
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic Surgeon',
      image: 'https://img.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_171337-5068.jpg',
      experience: '14+ years',
      education: 'MD, Mayo Clinic',
      linkedin: '#',
      twitter: '#',
      email: 'james.wilson@medicareplus.com'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'Ministry of Health Approved',
    'JCI Accredited',
    'CAP Certified Laboratory'
  ];

  // Counter Animation
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    statsData.forEach(stat => {
      let currentCount = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.target) {
          setCounters(prev => ({ ...prev, [stat.key]: stat.target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [stat.key]: Math.floor(currentCount) }));
        }
      }, stepDuration);
    });
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '100px 20px',
          textAlign: 'center'
        }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontSize: '56px', margin: '0 0 20px 0', fontWeight: 'bold' }}
        >
          About MediCare Plus
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ fontSize: '22px', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}
        >
          Leading the future of healthcare with compassion, innovation, and excellence
        </motion.p>
      </motion.div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        {/* Mission & Vision */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Responsive grid
            gap: '60px',
            alignItems: 'center',
            marginBottom: '100px'
          }}
        >
          {/* Left Side - Text */}
          <div>
            <h2 style={{ fontSize: '42px', marginBottom: '25px', color: '#333' }}>
              Our Mission & Vision
            </h2>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.9', marginBottom: '25px' }}>
              At MediCare Plus, our mission is to provide affordable, accessible, and world-class healthcare to everyone. We combine cutting-edge technology with compassionate care to deliver exceptional medical services.
            </p>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.9', marginBottom: '30px' }}>
              Our vision is to become the most trusted healthcare provider, setting new standards in patient care, medical innovation, and community health.
            </p>

            <div>
              {[
                'Patient-centered care approach',
                'State-of-the-art medical technology',
                'Highly qualified medical professionals',
                'Affordable and transparent pricing'
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '15px'
                }}>
                  <FaCheckCircle size={24} color="#10B981" />
                  <span style={{ fontSize: '17px', color: '#333' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div>
            <img 
              src="https://img.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-asian-female-physician-doctor-white-coat-with-clipboard-smiling-camera-standing-clinic-background_1258-107868.jpg"
              alt="Hospital Team"
              style={{
                width: '100%',
                borderRadius: '25px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
              }}
            />
          </div>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '30px',
            padding: '60px 40px',
            marginBottom: '100px',
            boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
          }}
        >
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Responsive Stats
            gap: '40px'
          }}>
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', color: 'white' }}
              >
                <div style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px'
                }}>
                  <stat.icon size={40} />
                </div>
                <h3 style={{ 
                  fontSize: '48px', 
                  margin: '0 0 10px 0',
                  fontWeight: 'bold'
                }}>
                  {counters[stat.key]}{stat.suffix}
                </h3>
                <p style={{ fontSize: '18px', margin: 0, opacity: 0.9 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Doctors Section - Completed */}
        <div style={{ marginBottom: '100px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '42px', color: '#333', marginBottom: '15px' }}>Meet Our Specialists</h2>
                <p style={{ fontSize: '18px', color: '#666' }}>Top rated doctors with extensive experience</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px'
            }}>
                {doctors.map((doctor, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -15 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        style={{
                            background: 'white',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                            textAlign: 'center',
                            border: '1px solid #eee'
                        }}
                    >
                        <div style={{ height: '250px', overflow: 'hidden' }}>
                            <img 
                                src={doctor.image} 
                                alt={doctor.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={{ padding: '25px' }}>
                            <h3 style={{ fontSize: '22px', margin: '0 0 5px 0', color: '#333' }}>{doctor.name}</h3>
                            <p style={{ color: '#667eea', fontWeight: 'bold', marginBottom: '15px' }}>{doctor.specialty}</p>
                            <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>{doctor.education}</p>
                            
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                                <a href="#" style={{ color: '#666', transition: 'color 0.3s' }}><FaLinkedinIn size={20} /></a>
                                <a href="#" style={{ color: '#666', transition: 'color 0.3s' }}><FaTwitter size={20} /></a>
                                <a href="#" style={{ color: '#666', transition: 'color 0.3s' }}><FaEnvelope size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Certifications Section */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', padding: '60px', background: '#f8f9fa', borderRadius: '30px' }}
        >
            <h3 style={{ fontSize: '28px', marginBottom: '40px', color: '#333' }}>Accreditation & Awards</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
                {certifications.map((cert, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaAward size={30} color="#667eea" />
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#555' }}>{cert}</span>
                    </div>
                ))}
            </div>
        </motion.div>

      </div>
    </div>
  );
}

export default About;