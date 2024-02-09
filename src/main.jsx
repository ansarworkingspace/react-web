import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './Screens/home/HomeScreen.jsx';
import LoginScreen from './Screens/Login/LoginScreen.jsx';
import PrivateRoute from './Components/User/privetRoute/UserPrivetRouter.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

      <Route  path='/login' element={<LoginScreen />} />
     
      <Route path='/' element={<PrivateRoute />}>
        <Route index={true} element={<HomeScreen />} />
      </Route>

  
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

);
