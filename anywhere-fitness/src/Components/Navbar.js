import React from 'react';
import { Link } from 'react-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link exact to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/register'>Sign Up</Link>
        </li>
        <li>
          <Link to='/login'>Log In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
