import React, { useState,useEffect } from 'react';
import './HamburgerMenu.css'; 
import { useNavigate } from 'react-router-dom';



const HamburgerMenu = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState('');

  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
    <div className="hamburger-container">
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {menuOpen && (
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">Dash Board</a>
          <a href="#">Product</a>
          <a href="#">Transaction</a>
          <a href="#">Journal</a>
          <a href="#" onClick={handleLogout}>Logout</a>
          <a href="#">Profile</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
