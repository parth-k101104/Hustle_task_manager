// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PriorityChart from './pages/PriorityChart';
import AllTasks from './pages/AllTasks';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/priority-chart" element={<PriorityChart />} />
            <Route path="/all-tasks" element={<AllTasks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;