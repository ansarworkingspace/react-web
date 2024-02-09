import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <h1>Welcome to the Home Screen!</h1>
     
    </>
  );
};

export default HomeScreen;
