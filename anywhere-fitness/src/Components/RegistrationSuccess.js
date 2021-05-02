import React from 'react';
import Navbar from './Navbar';
import '../components.css';

const RegistrationSuccess = () => {
  return (
    <>
      <Navbar />
      <div className='success'>
        <h1>Registration successful!</h1>
        <h4>Please click on log in to access your account.</h4>
      </div>
    </>
  );
};

export default RegistrationSuccess;
