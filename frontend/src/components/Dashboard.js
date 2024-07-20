
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CustomerList from './CustomerList'; 
import EditCustomer from './EditCustomer';
import Painter from './Painter';
import Gallery from './Gallery';
import Settings from './Settings';
import Logout from './Logout';
import Payment from './Payment';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><Link to="/painter">Painter</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/customer-list">Customer List</Link></li> 
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/painter" element={<Painter />} />
          <Route path="/gallery/:painterName" element={<Gallery />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/customer-list" element={<CustomerList />} />
          <Route path="/edit-customer/:id" element={<EditCustomer />} /> 
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
