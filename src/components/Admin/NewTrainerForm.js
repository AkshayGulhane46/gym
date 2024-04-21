import React, { useState } from 'react';
import '../../Styles/NewTrainerForm.scss'

function NewTrainerForm() {
  // State variables for basic details
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [specialization, setSpecialization] = useState('');

  // State variables for shift times
  const [shiftStartTime, setShiftStartTime] = useState('');
  const [shiftEndTime, setShiftEndTime] = useState('');

  // State variable for assigned client
  const [assignedClient, setAssignedClient] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Specialization:', specialization);
    console.log('Shift Start Time:', shiftStartTime);
    console.log('Shift End Time:', shiftEndTime);
    console.log('Assigned Client:', assignedClient);
  };

  return (
    <div className="NewTrainerForm">
      <h2>Add New Trainer</h2>
      <form onSubmit={handleSubmit}>
        {/* Basic Details */}
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Specialization:
          <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
        </label>
        <br />

        {/* Shift Times */}
        <h3>Shift Times</h3>
        <label>
          Shift Start Time:
          <input type="time" value={shiftStartTime} onChange={(e) => setShiftStartTime(e.target.value)} />
        </label>
        <br />
        <label>
          Shift End Time:
          <input type="time" value={shiftEndTime} onChange={(e) => setShiftEndTime(e.target.value)} />
        </label>
        <br />

        {/* Assigned Client */}
        <h3>Assigned Client</h3>
        <select value={assignedClient} onChange={(e) => setAssignedClient(e.target.value)}>
          <option value="">Select Client</option>
          {/* Populate options dynamically with client data */}
          <option value="client1">Client 1</option>
          <option value="client2">Client 2</option>
          <option value="client3">Client 3</option>
        </select>
        <br />

        {/* Submit Button */}
        <button type="submit">Add Trainer</button>
      </form>
    </div>
  );
}

export default NewTrainerForm;
