import React, { useState, useEffect } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('userInfo');

    if (userData) {
      const userObject = JSON.parse(userData);
      const userName = userObject.name;
      setName(userName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <div className='menuMainDiv'>
      <div className='logout' onClick={handleLogout}>
        <LogoutIcon style={{ marginRight: '0.5rem' }} />
      </div>
      <div className='menu'>
        <h4>Home</h4>
        <h4>Dash Board</h4>
        <h4>Product</h4>
        <h4>Transaction</h4>
        <h4>Journal</h4>
      </div>
      <div className='profile'>
        <PersonIcon />
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Menu;


