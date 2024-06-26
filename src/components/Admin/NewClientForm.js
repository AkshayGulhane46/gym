import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import '../../Styles/NewClientForm.scss';
import data from '../Admin/data.json';
import { UseDispatch, useDispatch } from 'react-redux';
import { addClient } from '../../redux/clientSlice';

function NewClientForm() {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    address: '',
    feesPaid: '',
    balanceAmount: '',
    disability: '',
    hasTrainer: false,
    isOldClient: false,
    gymStartDate: '',
    months: '1',
  });

  const [errors, setErrors] = useState({
    name: false,
    mobileNumber: false,
    address: false,
    feesPaid: false,
    balanceAmount: false,
    disability: false,
    gymStartDate: false,          
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

    // Validate form fields...
    if (Object.keys(newErrors).length === 0) {
      const newData = {
        id: data.clients.length + 1,
        ...formData,
      };
      dispatch(addClient(newData));
    }

    
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
        feesPaid: '',
        balanceAmount: '',
        disability: '',
        hasTrainer: false,
        isOldClient: false,
        gymStartDate: '',
        months: '1',
      });
      setErrors({
        name: false,
        mobileNumber: false,
        address: false,
        feesPaid: false,
        balanceAmount: false,
        disability: false,
        gymStartDate: false,
      });
    }
          // Save data to local storage
    const saveDataToLocalStorage = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
      };
    
    
    let x = Math.random() * 10;
    saveDataToLocalStorage(x,data);
  };


  return (
    <>
    <div className='form_page'>
      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <h1>Enter Details for New Member</h1>
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
            <label htmlFor="feesPaid" className="form_label">
              Fees Paid
            </label>
            <input
              id="feesPaid"
              name="feesPaid"
              className={`form_input ${errors.feesPaid ? 'error' : ''}`}
              type="text"
              value={formData.feesPaid}
              onChange={handleChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="balanceAmount" className="form_label">
              Balance Amount
            </label>
            <input
              id="balanceAmount"
              name="balanceAmount"
              className={`form_input ${errors.balanceAmount ? 'error' : ''}`}
              type="text"
              value={formData.balanceAmount}
              onChange={handleChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="disability" className="form_label">
              Any Disability
            </label>
            <input
              id="disability"
              name="disability"
              className={`form_input ${errors.disability ? 'error' : ''}`}
              type="text"
              value={formData.disability}
              onChange={handleChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="hasTrainer" className="form_label">
              Personal Trainer
            </label>
            <input
              id="hasTrainer"
              name="hasTrainer"
              className={`form_input ${errors.hasTrainer ? 'error' : ''}`}
              type="checkbox"
              checked={formData.hasTrainer}
              onChange={handleChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="isOldClient" className="form_label">
              is Old Client
            </label>
            <input
              id="isOldClient"
              name="isOldClient"
              className={`form_input ${errors.isOldClient ? 'error' : ''}`}
              type="checkbox"
              checked={formData.isOldClient}
              onChange={handleChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="gymStartDate" className="form_label">
              Gym Start Date
            </label>
            <input
              id="gymStartDate"
              name="gymStartDate"
              className={`form_input ${errors.gymStartDate ? 'error' : ''}`}
              type="date"
              value={formData.gymStartDate}
              onChange={handleChange}
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="months" className="form_label">
              Months
            </label>
            <select
              id="months"
              name="months"
              className={`form_input ${errors.months ? 'error' : ''}`}
              value={formData.months}
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
              Create New Client
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default NewClientForm;
