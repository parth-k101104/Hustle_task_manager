
// src/pages/Dashboard.js
import React from 'react';

const Dashboard = () => {
  const date = new Date();
  const formattedDate = date.toDateString();
  return (
    <div className="content">
      <h2>Wall Of Tasks</h2>
      <p>{formattedDate}</p>
      <div className="task-grid">
        <div className="task-card"></div>
        <div className="task-card"></div>
        <div className="task-card"></div>
        <div className="task-card"></div>
        <div className="task-card add-task">+</div>
      </div>
    </div>
  );
};

export default Dashboard;
