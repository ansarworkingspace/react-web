import React, { useState,useEffect } from 'react';
import './Login.css';
import loginImage from '/6310507.jpg';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function LoginScreen() {


  // this is only for the educational purpose | in real project we use any secure database
  const admin = {
    name: 'John Doe',
    email: 'john@example.com',
    password: '123', // Plain text password
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

   const navigate = useNavigate()
   useEffect(() => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem('userInfo');

    if (userData) {
      // If user data doesn't exist, navigate to the login page
      navigate('/');
    }
  }, [navigate]);




  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isPasswordValid = password === admin.password;

    if (isPasswordValid) {
      const loggedInUser = {
        name: admin.name,
        email: admin.email,
      };

      localStorage.setItem('userInfo', JSON.stringify(loggedInUser));

      toast.success('Login successful');
      navigate('/')
      setEmail('');
      setPassword('');
    } else {
      toast.error('Check if the password and email are correct');
      setError('Invalid email or password');
    }
  };

  return (
    <div className='mainLoginDiv'>
      <div className="loginForm">
        <h2>Enter Login Details</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter email'
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder='Enter Password'
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button className='formBtn' type="submit">Login</button>
        </form>
      </div>
      <div className="loginPageImage">
        <a href="https://www.freepik.com/free-vector/privacy-policy-concept-illustration_20547283.htm#query=login&position=1&from_view=keyword&track=sph&uuid=ea755794-9959-44e4-981c-4f88685dd10e" target="_blank" rel="noopener noreferrer">
          <img src={loginImage} alt="Login Image" />
        </a>
      </div>
    </div>
  );
}

export default LoginScreen;
