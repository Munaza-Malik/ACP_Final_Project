// Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Header.css'; 
import wmlogo from '../assets/wmlogo.png';

function Header({ cartCount, notificationCount }) {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    alert("Profile Logout!");
    navigate('/');
  };

  return (
    <div className="header-container">
      <img src={wmlogo} alt="Logo" width={120} />
        <div className="user-icon" onClick={handleLogin}>
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>
    </div>
  );
}

export default Header;
