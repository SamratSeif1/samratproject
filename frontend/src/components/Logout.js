// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Logout.css'; // Ensure this path is correct

const Logout = ({ onLogout }) => {
  const navigate = useNavigate(); // Get the navigate function for navigation

  const handleLogout = () => {
    // Clear user data from local storage or session storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    
    // Display alert to confirm logout
    alert('Successfully logged out!');
    
    // Call the onLogout callback to handle additional actions if provided
    if (typeof onLogout === 'function') {
      onLogout();
    }

    // Redirect to login page
    navigate('/'); // Adjust the path to your login page if different
  };

  return (
    <div className="logout-container">
      <h2>Are you sure you want to log out?</h2>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
