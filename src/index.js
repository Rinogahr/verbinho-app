import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  LoginComponent  from './app/login/Login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginComponent />
  </React.StrictMode>
);
