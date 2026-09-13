import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './PlaceholderLogin.css';

const PlaceholderLogin = ({ portalName }) => {
  const navigate = useNavigate();

  return (
    <div className="placeholder-login">
      <Header />
      <main className="login-content">
        <h1>{portalName} Portal</h1>
        <p>Login page coming soon...</p>
        <button onClick={() => navigate('/')} className="back-button">Back to Home</button>
      </main>
    </div>
  );
};

export default PlaceholderLogin;
