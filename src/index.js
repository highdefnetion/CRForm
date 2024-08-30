import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Adjust the path if App.js is in the src directory or a subdirectory
import MsalProvider from './MsalProvider'; // Import the MsalProvider
import './App.css'; // Ensure App.css is in the src directory

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider>
      <Router>
        <App />
      </Router>
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
