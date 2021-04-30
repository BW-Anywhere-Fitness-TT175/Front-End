import React from 'react';
import Navbar from './Navbar.js';

const LogInSuccess = (props) => {
  const { name, email, phone_number, role_id } = props;

  return (
    <>
      <Navbar />
      <div className='success'>
        <h1>Welcome, {name}!</h1>
        <h3>Your account details:</h3>
        <p>Name: {name}</p>
        <p>{role_id === 1 ? 'Instructork' : 'Student'}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phone_number}</p>
      </div>
    </>
  );
};

export default LogInSuccess;
