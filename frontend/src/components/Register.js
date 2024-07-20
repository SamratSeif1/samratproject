import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import logo from './logo.jpg';
import axiosInstance from '../axiosInstance';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState(''); // New state for name
  const [phoneNumber, setPhoneNumber] = useState(''); // New state for phone number
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }

    try {
      const response = await axiosInstance.post('http://localhost:4500/Customer/add', { name, email, password, phoneNumber });
      console.log('Registration successful', response.data);
      alert("Registration successful");
      
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Wall Painting System Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
      </form>
      <a href="/login">Login here</a>
    </div>
  );
}

export default Register;
