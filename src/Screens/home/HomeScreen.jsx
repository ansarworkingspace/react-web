import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../Components/User/menu/Menu';
import MainContent from '../../Components/User/mainContent/MainContent';
import HambgerMenu from '../../Components/User/hamburgerMenu/HamburgerMenu';

const HomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem('userInfo');

    if (!userData) {
      // If user data doesn't exist, navigate to the login page
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Menu/> 
      <HambgerMenu/>
      <MainContent/>
    </>
  );
};

export default HomeScreen;
