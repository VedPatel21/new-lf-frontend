import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Global CSS (includes dark mode overrides)
import './styles/header.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
