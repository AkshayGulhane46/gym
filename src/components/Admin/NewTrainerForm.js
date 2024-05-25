import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import '../../Styles/NewClientForm.scss';
import data from '../Admin/data.json';


function NewTrainerForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    address: '',
    salary: '',
    clients: [],
    inTime: '',
    outTime: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    mobileNumber: false,
    address: false,
    salary: false,
    clients: false,
    inTime: false,
    outTime: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] === '') {
        newErrors[key] = true;
      }
    });
    setErrors(newErrors);
    // If there are no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Add the new client data to the JSON file
      const newData = {
        id: data.clients.length + 1, // Generate a unique ID for the new client
        ...formData,
      };
      data.clients.push(newData);
      // Write the updated data back to the JSON file
      // This step may require server-side logic in a real application
      console.log('New client added:', newData);
      setFormData({
        name: '',
        mobileNumber: '',
        address: '',
        salary: '',
        clients: ["aman"],
        inTime: '',
        outTime: ''
      });
      setErrors({
        name: false,
        mobileNumber: false,
        address: false,
        salary: false,
        clients: false,
        inTime: false,
        outTime: true,
      });
    }
  };


  return (
    <>
    <div className='form_page'>
      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <h1>Enter Details of new Trainer</h1>
          <div className="form_input_container">
            <label htmlFor="name" className="form_label">
              Name
            </label>
            <input
              id="name"
              name="name"
              className={`form_input ${errors.name ? 'error' : ''}`}
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="mobileNumber" className="form_label">
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              name="mobileNumber"
              className={`form_input ${errors.mobileNumber ? 'error' : ''}`}
              type="number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="address" className="form_label">
              Address
            </label>
            <input
              id="address"
              name="address"
              className={`form_input ${errors.address ? 'error' : ''}`}
              type="text"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="salary" className="form_label">
            salary
            </label>
            <input
              id="salary"
              name="salary"
              className={`form_input ${errors.salary ? 'error' : ''}`}
              type="text"
              value={formData.salary}
              onChange={handleChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="inTime" className="form_label">
            in Time
            </label>
            <input
              id="inTime"
              name="inTime"
              className={`form_input ${errors.inTime ? 'error' : ''}`}
              type="time"
              value={formData.inTime}
              onChange={handleChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="outTime" className="form_label">
            out Time
            </label>
            <input
              id="outTime"
              name="outTime"
              className={`form_input ${errors.outTime ? 'error' : ''}`}
              type="time"
              value={formData.outTime}
              onChange={handleChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="clients" className="form_label">
              Clients
            </label>
            <select
              id="clients"
              name="clienst"
              className={`form_input ${errors.clients ? 'error' : ''}`}
              value={formData.clients}
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form_input_container">
            <button
              type="submit"
              className="form_button"
              variant="contained"
              color="primary"
            >
              Create New Trainer
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default NewTrainerForm;
