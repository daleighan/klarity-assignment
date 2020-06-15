import React from 'react';
import './App.scss';
import Dashboard from './modules/dashboard/dashboard'
import Sidebar from './components/sidebar/sidebar';


function KlarityApp() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default KlarityApp;
