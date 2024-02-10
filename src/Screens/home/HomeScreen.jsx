import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../Components/User/menu/Menu';
import MainContent from '../../Components/User/mainContent/MainContent';
import HambgerMenu from '../../Components/User/hambgerMenu/HambgerMenu';

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

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Menu from '../../Components/User/menu/Menu';
// import MainContent from '../../Components/User/mainContent/MainContent';
// import HamburgerMenu from '../../Components/User/hambgerMenu/HambgerMenu'; // Corrected the import

// const HomeScreen = () => {
//   const navigate = useNavigate();
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const userData = localStorage.getItem('userInfo');

//     if (!userData) {
//       navigate('/login');
//     }

//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     // Initial check on component mount
//     handleResize();

//     // Listen for window resize events
//     window.addEventListener('resize', handleResize);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [navigate]);

//   return (
//     <>
//       {isMobile ? <HamburgerMenu /> : <Menu />}
//       <MainContent />
//     </>
//   );
// };

// export default HomeScreen;
