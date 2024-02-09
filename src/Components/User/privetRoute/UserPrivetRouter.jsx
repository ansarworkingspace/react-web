import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Check if user data exists in localStorage
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoute;
