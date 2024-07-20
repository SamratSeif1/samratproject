import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings saved!');
  };

  return (
    <div className="settings-card">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-group">
          <label htmlFor="theme">Theme:</label>
          <select id="theme" value={theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <button type="submit" className="save-button">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
