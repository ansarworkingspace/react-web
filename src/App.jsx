import { Container } from 'react-bootstrap';
import Header from '../src/Components/User/header/UserHeader';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <div className='mainContainer'>
        <Outlet />
      </div>
    </>
  );
};

export default App;