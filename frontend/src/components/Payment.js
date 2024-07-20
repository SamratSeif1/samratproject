import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const [alertVisible, setAlertVisible] = useState(false); 
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const itemName = query.get('item') || 'the item'; 

  const handlePayment = (event) => {
    event.preventDefault();

    
    setAlertVisible(true);
  };

  const handleCloseAlert = () => {
    setAlertVisible(false);
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <div className="payment-forms">
    
        <div className="payment-form">
          <h2>Bank Payment</h2>
          <form onSubmit={handlePayment}>
            <div className="form-group">
              <label htmlFor="bank-account-number">Account Number:</label>
              <input type="text" id="bank-account-number" name="bankAccountNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="bank-password">Password:</label>
              <input type="password" id="bank-password" name="bankPassword" required />
            </div>
            <button type="submit" className="pay-button">Pay</button>
          </form>
        </div>

        {/* Phone Payment Form */}
        <div className="payment-form">
          <h2>Phone Payment</h2>
          <form onSubmit={handlePayment}>
            <div className="form-group">
              <label htmlFor="phone-number">Phone Number:</label>
              <input type="text" id="phone-number" name="phoneNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone-password">Password:</label>
              <input type="password" id="phone-password" name="phonePassword" required />
            </div>
            <button type="submit" className="pay-button">Pay</button>
          </form>
        </div>
      </div>

      
      {alertVisible && (
        <div className="custom-alert">
          <p>Payment for {itemName} was successful.</p>
          <a href="path/to/your/download.jpg" download="download.jpg" className="download-button">Download Picture</a>
          <button onClick={handleCloseAlert} className="close-button">Close</button>
        </div>
      )}
    </div>
  );
};

export default Payment;
