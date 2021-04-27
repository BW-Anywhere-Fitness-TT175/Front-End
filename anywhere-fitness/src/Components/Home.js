import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import SignInForm from './SignInForm';
import Navbar from './Navbar.js';

const Home = () => {
  return (
    <div className='home'>
      <h1>Anywhere Fitness</h1>

      <Navbar />
    </div>
  );
};

export default Home;
