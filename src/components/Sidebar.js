// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Set active section based on the path
    if (location.pathname === '/priority-chart' || location.pathname === '/all-tasks') {
      setActiveSection('taskManager');
    } else if (location.pathname === '/') {
      setActiveSection('wall');
    } else {
      setActiveSection('');
    }
  }, [location.pathname]);

  return (
    <div className="sidebar">
      {/* Static username display */}
      <div className="username">
        user_name
        <div className="underline"></div>
      </div>

      {/* Wall Of Tasks */}
      <div
        className={`nav-title ${activeSection === 'wall' ? 'active-title' : ''}`}
        onClick={() => setActiveSection('wall')}
      >
        <NavLink
          to="/"  // Ensure this is the correct route for the dashboard
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Wall Of Tasks
        </NavLink>
      </div>

      {/* Task Manager */}
      <div className={`nav-title ${activeSection === 'taskManager' ? 'active-title' : ''}`}>
        Task Manager
      </div>

      {/* Navigation Links */}
      <nav className="nav-container">
        <NavLink
          to="/priority-chart"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={() => setActiveSection('taskManager')}
        >
          Priority Chart
        </NavLink>
        <NavLink
          to="/all-tasks"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={() => setActiveSection('taskManager')}
        >
          All Tasks
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;