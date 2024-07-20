
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Painter from './components/Painter';
import Gallery from './components/Gallery';
import Payment from './components/Payment';
import Settings from './components/Settings';
import Logout from './components/Logout';
import ProfileCards from './components/ProfileCards';
import CustomerList from './components/CustomerList';
import EditCustomer from './components/EditCustomer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/painter" element={<Painter />} />
          <Route path="/gallery/:painterName" element={<Gallery />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profilecards" element={<ProfileCards />} />
          <Route path="/customer-list" element={<CustomerList />} />
          <Route path="/edit-customer/:id" element={<EditCustomer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
