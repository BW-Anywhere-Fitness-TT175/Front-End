import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import '../components.css';

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
    <>
      <Row>
        <Col lg={3} md={4} sm={5}></Col>
        <Col lg={7} md={4} sm={5}>
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
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
