import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaStethoscope, FaBaby, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaAward, FaUserMd, FaAmbulance } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [showDeptDetails, setShowDeptDetails] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    symptoms: ''
  });
  const [appointments, setAppointments] = useState([]);

  const departments = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: FaHeart,
      description: 'Heart care and treatment',
      details: 'Our cardiology department offers comprehensive heart care services including ECG, echocardiography, stress tests, and cardiac catheterization.',
      doctors: [
        { name: 'Dr. Sarah Johnson', experience: '15 years', fee: 150 },
        { name: 'Dr. Michael Chen', experience: '12 years', fee: 120 }
      ],
      services: ['ECG', 'Echocardiography', 'Cardiac Catheterization', 'Heart Surgery']
    },
    {
      id: 'general',
      name: 'General Medicine',
      icon: FaStethoscope,
      description: 'Health check-ups',
      details: 'General Medicine department provides comprehensive health assessments, preventive care, and treatment for common illnesses.',
      doctors: [
        { name: 'Dr. Emily Rodriguez', experience: '10 years', fee: 100 },
        { name: 'Dr. James Wilson', experience: '8 years', fee: 90 }
      ],
      services: ['General Checkup', 'Vaccination', 'Health Screening', 'Chronic Disease Management']
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      icon: FaBaby,
      description: 'Child healthcare',
      details: 'Our pediatrics department specializes in the health and development of infants, children, and adolescents.',
      doctors: [
        { name: 'Dr. Lisa Anderson', experience: '14 years', fee: 110 },
        { name: 'Dr. David Kim', experience: '11 years', fee: 100 }
      ],
      services: ['Child Vaccination', 'Growth Monitoring', 'Pediatric Care', 'Developmental Assessment']
    }
  ];

  const topDoctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', image: 'https://randomuser.me/api/portraits/women/1.jpg', rating: 5 },
    { name: 'Dr. Michael Chen', specialty: 'General Physician', image: 'https://randomuser.me/api/portraits/men/1.jpg', rating: 5 },
    { name: 'Dr. Emily Rodriguez', specialty: 'Pediatrician', image: 'https://randomuser.me/api/portraits/women/2.jpg', rating: 5 },
    { name: 'Dr. James Wilson', specialty: 'Surgeon', image: 'https://randomuser.me/api/portraits/men/2.jpg', rating: 5 }
  ];

  const testimonials = [
    { name: 'Ali Khan', review: 'Excellent service! The doctors are very professional and caring.', rating: 5 },
    { name: 'Sara Ahmed', review: 'Best healthcare facility in town. Highly recommended!', rating: 5 },
    { name: 'Ahmed Raza', review: 'Quick appointment booking and friendly staff. Great experience!', rating: 5 }
  ];

  const whyChooseUs = [
    { icon: FaClock, title: '24/7 Support', description: 'Round the clock medical assistance' },
    { icon: FaUserMd, title: 'Expert Doctors', description: '50+ certified medical professionals' },
    { icon: FaAmbulance, title: 'Emergency Care', description: 'Immediate medical response' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM', 
    '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  const handleDeptClick = (dept) => {
    setSelectedDept(dept);
    setShowDeptDetails(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'department' && { doctor: '' })
    }));
  };

  const getSelectedDepartment = () => {
    return departments.find(dept => dept.id === formData.department);
  };

  const getSelectedDoctor = () => {
    const dept = getSelectedDepartment();
    if (dept) {
      return dept.doctors.find(doc => doc.name === formData.doctor);
    }
    return null;
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || 
        !formData.department || !formData.doctor || !formData.date || !formData.time) {
      alert('Please fill all required fields');
      return;
    }

    const newAppointment = {
      id: Date.now(),
      ...formData,
      departmentName: getSelectedDepartment()?.name,
      doctorFee: getSelectedDoctor()?.fee
    };
    
    setAppointments([...appointments, newAppointment]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      doctor: '',
      date: '',
      time: '',
      symptoms: ''
    });
    setShowForm(false);
    alert('Appointment Booked Successfully!');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section - Modern Split Design */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          color: 'white', 
          padding: '80px 20px',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          width: '100%'
        }}>
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 style={{ 
              fontSize: '56px', 
              margin: '0 0 20px 0',
              fontWeight: 'bold',
              lineHeight: '1.2'
            }}>
              MediCare Plus
            </h1>
            <p style={{ 
              fontSize: '24px', 
              marginBottom: '15px',
              opacity: 0.9
            }}>
              Your Health, Our Priority
            </p>
            <p style={{ 
              fontSize: '18px', 
              marginBottom: '40px',
              lineHeight: '1.6',
              opacity: 0.85
            }}>
              Book appointments with top doctors and specialists. Get quality healthcare at your convenience.
            </p>
            
            {/* Search Bar */}
            <div style={{ 
              background: 'white',
              borderRadius: '50px',
              padding: '8px',
              display: 'flex',
              marginBottom: '30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
              <input 
                type="text"
                placeholder="Search for doctors, departments..."
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  padding: '12px 20px',
                  fontSize: '16px',
                  background: 'transparent'
                }}
              />
              <button style={{
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Search
              </button>
            </div>

            <button 
              onClick={() => setShowForm(true)}
              style={{
                background: 'white',
                color: '#667eea',
                padding: '18px 40px',
                border: 'none',
                borderRadius: '50px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              📅 Book Appointment Now
            </button>
          </motion.div>

          {/* Right Side - Doctor Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <img 
              src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
              alt="Doctor"
              style={{
                width: '100%',
                maxWidth: '500px',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        {/* Why Choose Us Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ 
            fontSize: '42px', 
            textAlign: 'center', 
            marginBottom: '50px',
            color: '#333'
          }}>
            Why Choose Us?
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '40px'
          }}>
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white',
                  padding: '40px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px'
                }}>
                  <item.icon size={40} color="white" />
                </div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#333' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Departments Section with Icons & Hover */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ 
            fontSize: '42px', 
            textAlign: 'center', 
            marginBottom: '50px',
            color: '#333'
          }}>
            Our Departments
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '30px'
          }}>
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={dept.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -15, 
                    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
                    borderColor: '#667eea'
                  }}
                  onClick={() => handleDeptClick(dept)}
                  style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    border: '2px solid transparent',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px'
                  }}>
                    <Icon size={50} color="white" />
                  </div>
                  <h3 style={{ 
                    fontSize: '26px', 
                    marginBottom: '15px',
                    color: '#333',
                    fontWeight: 'bold'
                  }}>
                    {dept.name}
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    fontSize: '16px',
                    marginBottom: '20px',
                    lineHeight: '1.6'
                  }}>
                    {dept.description}
                  </p>
                  <p style={{ 
                    color: '#667eea', 
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}>
                    Click for details →
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Top Doctors Carousel */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ 
            fontSize: '42px', 
            textAlign: 'center', 
            marginBottom: '50px',
            color: '#333'
          }}>
            Our Top Doctors
          </h2>
          <Slider {...sliderSettings}>
            {topDoctors.map((doctor, index) => (
              <div key={index} style={{ padding: '15px' }}>
                <div style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  textAlign: 'center'
                }}>
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      margin: '0 auto 20px',
                      border: '5px solid #667eea'
                    }}
                  />
                  <h3 style={{ fontSize: '20px', marginBottom: '8px', color: '#333' }}>
                    {doctor.name}
                  </h3>
                  <p style={{ color: '#667eea', marginBottom: '12px', fontWeight: 'bold' }}>
                    {doctor.specialty}
                  </p>
                  <div style={{ color: '#FFD700', fontSize: '18px' }}>
                    {'⭐'.repeat(doctor.rating)}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ 
            fontSize: '42px', 
            textAlign: 'center', 
            marginBottom: '50px',
            color: '#333'
          }}>
            What Our Patients Say
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '30px'
          }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white',
                  padding: '35px',
                  borderRadius: '20px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  position: 'relative'
                }}
              >
                <div style={{ 
                  fontSize: '50px', 
                  color: '#667eea', 
                  opacity: 0.2,
                  position: 'absolute',
                  top: '10px',
                  left: '20px'
                }}>
                  "
                </div>
                <div style={{ color: '#FFD700', marginBottom: '15px', fontSize: '18px' }}>
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p style={{ 
                  color: '#666', 
                  fontSize: '16px',
                  lineHeight: '1.8',
                  marginBottom: '20px',
                  fontStyle: 'italic'
                }}>
                  {testimonial.review}
                </p>
                <p style={{ 
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: '18px'
                }}>
                  - {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Appointments List */}
        {appointments.length > 0 && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '42px', marginBottom: '30px', color: '#333' }}>
              Your Appointments
            </h2>
            {appointments.map((apt, index) => (
              <motion.div
                key={apt.id}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                style={{ 
                  background: 'white', 
                  padding: '30px', 
                  borderRadius: '15px', 
                  marginBottom: '20px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div>
                    <h3 style={{ margin: '0 0 15px 0', color: '#667eea', fontSize: '24px' }}>
                      {apt.name}
                    </h3>
                    <p style={{ margin: '8px 0', color: '#666' }}>
                      <strong>Doctor:</strong> {apt.doctor}
                    </p>
                    <p style={{ margin: '8px 0', color: '#666' }}>
                      <strong>Department:</strong> {apt.departmentName}
                    </p>
                    <p style={{ margin: '8px 0', color: '#666' }}>
                      <strong>Date:</strong> {apt.date} at {apt.time}
                    </p>
                    <p style={{ margin: '8px 0', color: '#666' }}>
                      <strong>Contact:</strong> {apt.phone}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ 
                      background: '#10B981', 
                      color: 'white', 
                      padding: '10px 20px', 
                      borderRadius: '25px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      display: 'inline-block',
                      marginBottom: '15px'
                    }}>
                      ✓ Confirmed
                    </span>
                    <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#667eea', margin: 0 }}>
                      ${apt.doctorFee}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Department Details Modal */}
      {showDeptDetails && selectedDept && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
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
            transition={{ duration: 0.3 }}
            style={{ 
              background: 'white', 
              padding: '45px', 
              borderRadius: '25px', 
              width: '700px',
              maxWidth: '95%',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
              <h2 style={{ color: '#667eea', margin: 0, fontSize: '32px' }}>
                {selectedDept.name}
              </h2>
              <button 
                onClick={() => setShowDeptDetails(false)}
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

            <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '30px', fontSize: '17px' }}>
              {selectedDept.details}
            </p>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#667eea', marginBottom: '20px', fontSize: '24px' }}>
                Our Doctors
              </h3>
              {selectedDept.doctors.map((doctor, index) => (
                <div key={index} style={{ 
                  background: '#F8F9FA', 
                  padding: '20px', 
                  borderRadius: '12px',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ margin: 0, fontWeight: 'bold', fontSize: '18px' }}>
                        👨‍⚕️ {doctor.name}
                      </p>
                      <p style={{ margin: '8px 0 0 0', color: '#666' }}>
                        Experience: {doctor.experience}
                      </p>
                    </div>
                    <p style={{ margin: 0, fontWeight: 'bold', color: '#667eea', fontSize: '22px' }}>
                      ${doctor.fee}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#667eea', marginBottom: '20px', fontSize: '24px' }}>
                Services We Offer
              </h3>
              <ul style={{ paddingLeft: '25px', color: '#666', lineHeight: '2.2', fontSize: '16px' }}>
                {selectedDept.services.map((service, index) => (
                  <li key={index}>✓ {service}</li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => {
                setShowDeptDetails(false);
                setShowForm(true);
                setFormData(prev => ({ ...prev, department: selectedDept.id }));
              }}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '18px',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '18px',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
              }}
            >
              Book Appointment in {selectedDept.name}
            </button>
          </motion.div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showForm && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          overflowY: 'auto',
          padding: '20px'
        }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '25px', 
              width: '600px',
              maxWidth: '100%',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h2 style={{ margin: 0, color: '#667eea', fontSize: '28px' }}>
                Book Appointment
              </h2>
              <button 
                onClick={() => setShowForm(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '28px',
                  cursor: 'pointer',
                  color: '#999'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ color: '#333', fontSize: '20px', marginBottom: '20px' }}>
                Patient Information
              </h3>
              
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
                  Full Name <span style={{ color: 'red' }}>*</span>
                </label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{ 
                    width: '100%', 
                    padding: '14px',
                    border: '2px solid #E5E7EB', 
                borderRadius: '10px',
                fontSize: '15px',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              placeholder="Enter your full name"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '18px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
                Email <span style={{ color: 'red' }}>*</span>
              </label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ 
                  width: '100%', 
                  padding: '14px', 
                  border: '2px solid #E5E7EB', 
                  borderRadius: '10px',
                  fontSize: '15px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
                Phone <span style={{ color: 'red' }}>*</span>
              </label>
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={{ 
                  width: '100%', 
                  padding: '14px', 
                  border: '2px solid #E5E7EB', 
                  borderRadius: '10px',
                  fontSize: '15px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ color: '#333', fontSize: '20px', marginBottom: '20px' }}>
            Appointment Details
          </h3>
          
          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
              Department <span style={{ color: 'red' }}>*</span>
            </label>
            <select 
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              style={{ 
                width: '100%', 
                padding: '14px', 
                border: '2px solid #E5E7EB', 
                borderRadius: '10px',
                fontSize: '15px'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            >
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
          </div>

          {formData.department && (
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
                Select Doctor <span style={{ color: 'red' }}>*</span>
              </label>
              <select 
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                style={{ 
                  width: '100%', 
                  padding: '14px', 
                  border: '2px solid #E5E7EB', 
                  borderRadius: '10px',
                  fontSize: '15px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              >
                <option value="">Select Doctor</option>
                {getSelectedDepartment()?.doctors.map((doc, index) => (
                  <option key={index} value={doc.name}>
                    {doc.name} - ${doc.fee} ({doc.experience} exp.)
                  </option>
                ))}
              </select>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '18px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
                Date <span style={{ color: 'red' }}>*</span>
              </label>
              <input 
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                style={{ 
                  width: '100%', 
                  padding: '14px', 
                  border: '2px solid #E5E7EB', 
                  borderRadius: '10px',
                  fontSize: '15px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
                Time <span style={{ color: 'red' }}>*</span>
              </label>
              <select 
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                style={{ 
                  width: '100%', 
                  padding: '14px', 
                  border: '2px solid #E5E7EB', 
                  borderRadius: '10px',
                  fontSize: '15px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              >
                <option value="">Select Time</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
              Symptoms / Reason for Visit
            </label>
            <textarea 
              name="symptoms"
              value={formData.symptoms}
              onChange={handleInputChange}
              rows="3"
              style={{ 
                width: '100%', 
                padding: '14px', 
                border: '2px solid #E5E7EB', 
                borderRadius: '10px',
                fontSize: '15px',
                resize: 'vertical'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              placeholder="Describe your symptoms..."
            />
          </div>
        </div>

        {formData.doctor && (
          <div style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            padding: '20px', 
            borderRadius: '15px', 
            marginBottom: '25px',
            textAlign: 'center',
            color: 'white'
          }}>
            <p style={{ margin: 0, fontSize: '16px', opacity: 0.9 }}>Consultation Fee</p>
            <p style={{ margin: '8px 0 0 0', fontSize: '36px', fontWeight: 'bold' }}>
              ${getSelectedDoctor()?.fee}
            </p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            onClick={handleSubmit}
            style={{
              flex: '1',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '16px',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '17px',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
            }}
          >
            Confirm Booking
          </button>
          <button 
            onClick={() => setShowForm(false)}
            style={{
              flex: '1',
              background: '#EF4444',
              color: 'white',
              padding: '16px',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '17px'
            }}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  )}

  {/* Login Link */}
  <div style={{ 
    textAlign: 'center', 
    padding: '40px 20px',
    background: '#F9FAFB'
  }}>
    <Link to="/login" style={{ 
      color: '#667eea', 
      fontSize: '18px', 
      fontWeight: 'bold',
      textDecoration: 'none'
    }}>
      Already have an account? Login →
    </Link>
  </div>
</div>
);
}
export default Home;