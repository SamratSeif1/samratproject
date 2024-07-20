import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CustomerList.css';

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:4500/Customer/all');
        setCustomers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch customers. Please try again.');
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4500/Customer/delete/${id}`);
      setCustomers(customers.filter((customer) => customer.id !== id));
    } catch (err) {
      setError('Failed to delete customer. Please try again.');
    }
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setNewCustomer({
      name: customer.name || '',
      email: customer.email || '',
      phoneNumber: customer.phoneNumber || '',
      password: customer.password || ''
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:4500/Customer/update/${editingCustomer.id}`, editingCustomer);
      setCustomers(customers.map((customer) =>
        customer.id === editingCustomer.id ? response.data : customer
      ));
      setEditingCustomer(null);
      setNewCustomer({ name: '', email: '', phoneNumber: '', password: '' });
    } catch (err) {
      setError('Failed to update customer. Please try again.');
    }
  };

  const handleAdd = async () => {
    if (!newCustomer.name || !newCustomer.email || !newCustomer.phoneNumber || !newCustomer.password) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4500/Customer/add', newCustomer);
      setCustomers([...customers, response.data]);
      setNewCustomer({ name: '', email: '', phoneNumber: '', password: '' });
      setEditingCustomer(null);
      setError('');
    } catch (err) {
      setError('Failed to add customer. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCustomer && editingCustomer.id) {
      handleUpdate();
    } else {
      handleAdd();
    }
  };

  const closeModal = () => {
    setEditingCustomer(null);
    setNewCustomer({ name: '', email: '', phoneNumber: '', password: '' });
    setError('');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="customer-list-container">
      <h2>Customer List</h2>
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber}</td>
              <td>
                <button onClick={() => handleEdit(customer)}>Edit</button>
                <button onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-button" onClick={() => setEditingCustomer({})}>Add Customer</button>

      {(editingCustomer || editingCustomer === {}) && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{editingCustomer && editingCustomer.id ? 'Edit Customer' : 'Add Customer'}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newCustomer.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newCustomer.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={newCustomer.phoneNumber}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={newCustomer.password}
                onChange={handleInputChange}
              />
              <button type="submit">{editingCustomer && editingCustomer.id ? 'Update Customer' : 'Add Customer'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerList;
