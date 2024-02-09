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
import HomeScreen from './Screens/UserScreen/HomeScreen.jsx';
import LoginScreen from './Screens/UserScreen/LoginScreen.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route  path='/login' element={<LoginScreen />} />
     
   
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

);
