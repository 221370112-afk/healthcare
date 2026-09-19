import React, { useState } from 'react';

const MedicineReminder = () => {
  const [time, setTime] = useState('');

  return (
    <div>
      <h3>Medicine Reminder</h3>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button>Set Reminder</button>
    </div>
  );
};

export default MedicineReminder;
