import React, { useState } from 'react';

const PrescriptionForm = () => {
  const [medicine, setMedicine] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Prescription added: ${medicine}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Prescription</h3>
      <input
        type="text"
        placeholder="Medicine Name"
        value={medicine}
        onChange={(e) => setMedicine(e.target.value)}
      />
      <br /><br />
      <button type="submit">Save</button>
    </form>
  );
};

export default PrescriptionForm;
