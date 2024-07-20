// EditCustomer.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import './CustomerList.css';

function EditCustomer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axiosInstance.get(`/customers/${id}`);
        setCustomer(response.data);
      } catch (err) {
        setError('Failed to fetch customer details. Please try again.');
      }
    };

    fetchCustomer();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/customers/${id}`, customer);
      navigate('/customer-list'); // Redirect to customer list after update
    } catch (err) {
      setError('Failed to update customer details. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value
    }));
  };

  return (
    <div className="edit-customer-container">
      <h2>Edit Customer</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={customer.name || ''}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={customer.email || ''}
          onChange={handleChange}
        />
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={customer.phoneNumber || ''}
          onChange={handleChange}
        />
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
}

export default EditCustomer;
