import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHospital, FaTooth, FaBrain, FaEye, FaBone, FaHeartbeat,
  FaXRay, FaFlask, FaMicroscope, FaSyringe, FaAmbulance, 
  FaVideo, FaPhone, FaClock, FaCheckCircle 
} from 'react-icons/fa';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const primaryServices = [
    {
      id: 1,
      icon: FaHeartbeat,
      title: 'Advanced Surgery',
      description: 'State-of-the-art surgical procedures with expert surgeons and modern equipment.',
      details: 'Our surgical department is equipped with the latest technology and staffed by board-certified surgeons with decades of combined experience.',
      features: ['Minimally Invasive Surgery', 'Robotic Surgery', 'Same-day Surgery', 'Post-operative Care']
    },
    {
      id: 2,
      icon: FaTooth,
      title: 'Dental Care',
      description: 'Complete dental solutions from routine checkups to advanced cosmetic procedures.',
      details: 'Our dental clinic offers comprehensive oral health services including preventive care, restorative treatments, and cosmetic dentistry.',
      features: ['Teeth Whitening', 'Dental Implants', 'Root Canal', 'Orthodontics']
    },
    {
      id: 3,
      icon: FaBrain,
      title: 'Neurology',
      description: 'Expert neurological care for brain and nervous system disorders.',
      details: 'Specialized treatment for neurological conditions with cutting-edge diagnostic tools and treatment protocols.',
      features: ['Brain Imaging', 'Stroke Care', 'Epilepsy Treatment', 'Neurosurgery']
    },
    {
      id: 4,
      icon: FaEye,
      title: 'Ophthalmology',
      description: 'Comprehensive eye care services from routine exams to complex eye surgeries.',
      details: 'Advanced eye care with experienced ophthalmologists and state-of-the-art equipment.',
      features: ['LASIK Surgery', 'Cataract Surgery', 'Retinal Care', 'Glaucoma Treatment']
    },
    {
      id: 5,
      icon: FaBone,
      title: 'Orthopedics',
      description: 'Complete bone and joint care including sports medicine and rehabilitation.',
      details: 'Specialized orthopedic care for all musculoskeletal conditions with advanced treatment options.',
      features: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery', 'Fracture Care']
    },
    {
      id: 6,
      icon: FaHospital,
      title: 'General Medicine',
      description: 'Primary care services for prevention, diagnosis, and treatment of various conditions.',
      details: 'Comprehensive primary healthcare services for patients of all ages.',
      features: ['Health Checkups', 'Chronic Disease Management', 'Preventive Care', 'Vaccinations']
    }
  ];

  const diagnosticServices = [
    { icon: FaXRay, name: 'MRI & CT Scan', description: 'Advanced imaging technology' },
    { icon: FaFlask, name: 'Blood Bank & Pathology', description: '24/7 laboratory services' },
    { icon: FaMicroscope, name: 'X-Ray & Ultrasound', description: 'Digital radiography' },
    { icon: FaSyringe, name: 'Clinical Laboratory', description: 'Comprehensive testing' }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
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
          Our Services
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ fontSize: '22px', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}
        >
          Comprehensive healthcare solutions with cutting-edge technology and compassionate care
        </motion.p>
      </motion.div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        {/* Primary Medical Services */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '100px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', color: '#333', marginBottom: '15px' }}>
              Primary Medical Services
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              World-class medical care across multiple specialties
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '35px'
          }}>
            {primaryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(102, 126, 234, 0.2)' }}
                style={{
                  background: 'white',
                  padding: '40px',
                  borderRadius: '20px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onClick={() => setSelectedService(service)}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '25px'
                }}>
                  <service.icon size={40} color="white" />
                </div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#333' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
                  {service.description}
                </p>
                <button style={{
                  background: 'transparent',
                  border: '2px solid #667eea',
                  color: '#667eea',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#667eea';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#667eea';
                }}
                >
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Diagnostic & Lab Services */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ 
            marginBottom: '100px',
            background: 'white',
            borderRadius: '30px',
            padding: '60px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
          }}
        >
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Left Side - Image */}
            <div>
              <img 
                src="https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-insurance-medicine-concept-friendly-smiling-doctor-physician-laboratory-coat-pointing-fingers-left-showing-medical-equipment-hospital_1258-107864.jpg"
                alt="Laboratory"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              />
            </div>

            {/* Right Side - Services List */}
            <div>
              <h2 style={{ fontSize: '38px', marginBottom: '20px', color: '#333' }}>
                Diagnostic & Lab Services
              </h2>
              <p style={{ color: '#666', fontSize: '17px', lineHeight: '1.8', marginBottom: '35px' }}>
                Advanced diagnostic facilities with state-of-the-art equipment and experienced technicians
              </p>

              <div style={{ space: '25px' }}>
                {diagnosticServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '20px',
                      background: '#F9FAFB',
                      borderRadius: '15px',
                      marginBottom: '15px'
                    }}
                  >
                    <div style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <service.icon size={28} color="white" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '18px', margin: '0 0 5px 0', color: '#333' }}>
                        {service.name}
                      </h4>
                      <p style={{ margin: 0, color: '#666', fontSize: '15px' }}>
                        {service.description}
                      </p>
                    </div>
                    <FaCheckCircle size={24} color="#10B981" style={{ marginLeft: 'auto' }} />
                  </motion.div>
                ))}
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                color: 'white',
                padding: '20px 30px',
                borderRadius: '15px',
                marginTop: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <FaClock size={32} />
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>24/7 Lab Access</h4>
                  <p style={{ margin: 0, opacity: 0.9, fontSize: '15px' }}>
                    Emergency diagnostic services available round the clock
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Emergency & Telemedicine */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
            borderRadius: '30px',
            padding: '60px',
            color: 'white',
            marginBottom: '80px'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '42px', marginBottom: '15px' }}>
              Emergency & Telemedicine
            </h2>
            <p style={{ fontSize: '18px', opacity: 0.9 }}>
              Immediate care when you need it most
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {/* 24/7 Ambulance Service */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: '40px',
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <div style={{
                background: 'white',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px'
              }}>
                <FaAmbulance size={40} color="#EF4444" />
              </div>
              <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>
                24/7 Ambulance Service
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '25px', opacity: 0.9 }}>
                Rapid response emergency medical services with advanced life support equipped ambulances
              </p>
              <button style={{
                background: 'white',
                color: '#EF4444',
                border: 'none',
                padding: '15px 35px',
                borderRadius: '50px',
                fontSize: '17px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <FaPhone size={18} />
                Call Emergency: 911
              </button>
            </motion.div>

            {/* Online Consultation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: '40px',
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <div style={{
                background: 'white',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px'
              }}>
                <FaVideo size={40} color="#EF4444" />
              </div>
              <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>
                Online Consultation
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '25px', opacity: 0.9 }}>
                Video call consultations with top doctors from the comfort of your home
              </p>
              <button style={{
                background: 'white',
                color: '#EF4444',
                border: 'none',
                padding: '15px 35px',
                borderRadius: '50px',
                fontSize: '17px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <FaVideo size={18} />
                Start Video Call
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              background: 'white',
              padding: '50px',
              borderRadius: '25px',
              maxWidth: '700px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  width: '70px',
                  height: '70px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <selectedService.icon size={35} color="white" />
                </div>
                <h2 style={{ fontSize: '32px', color: '#333', margin: 0 }}>
                  {selectedService.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '32px',
                  cursor: 'pointer',
                  color: '#999'
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8', marginBottom: '35px' }}>
              {selectedService.details}
            </p>

            <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>
              Key Features
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '35px' }}>
              {selectedService.features.map((feature, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '15px',
                  background: '#F9FAFB',
                  borderRadius: '10px'
                }}>
                  <FaCheckCircle size={20} color="#10B981" />
                  <span style={{ fontSize: '16px', color: '#333' }}>{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedService(null)}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '16px',
                border: 'none',
                borderRadius: '50px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Book Appointment
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Services;