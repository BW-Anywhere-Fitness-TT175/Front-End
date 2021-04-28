import React from 'react';
import { Link } from 'react-router-dom';

const liStyles = {
  display: 'inline',
  padding: '10px',
  backgroundColor: 'black',
  color: 'white',
};

const navbarStyle = {
  width: '100%',
};
const Navbar = () => {
  return (
    <div className='navbar' style={navbarStyle}>
      <ul>
        <li style={liStyles}>
          <Link to='/'>Home</Link>
        </li>
        <li style={liStyles}>
          <Link to='/register'>Sign Up</Link>
        </li>
        <li style={liStyles}>
          <Link to='/login'>Log In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
