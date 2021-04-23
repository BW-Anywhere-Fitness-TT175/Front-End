import React, { useState } from 'react';
//import axios from 'axios';
import {
  Form,
  FormGroup,
  Col,
  Label,
  Row,
  Input,
  FormText,
  FormFeedback,
} from 'reactstrap';

const formInputStyles = {
  padding: '10px',
  margin: '10px',
};

const SignInForm = (props) => {
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUserSignIn({ ...userSignIn, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className='col-sm-12 col-md-6 offset-md-3'>
        <h3>Sign In</h3>
        <h1>Welcome Back!</h1>
      </div>
      <Form name='signInForm'>
        <Col className='col-sm-12 col-md-6 offset-md-3'>
          <FormGroup style={formInputStyles}>
            <Label for='email'>Email</Label>
            <Input
              name='email'
              onChange={handleChange}
              value={userSignIn.email}
            />
            <FormText>Please enter your email </FormText>
            <FormFeedback valid>Email is available! </FormFeedback>
            <FormFeedback invalid>
              Sorry, we do not recognize this email. Please sign up for a new
              account.
            </FormFeedback>
          </FormGroup>
        </Col>
        <Row>
          <Col lg={5}>
            <FormGroup style={formInputStyles}></FormGroup>
            <Label for='password'>Password</Label>
            <Input
              name='password'
              onChange={handleChange}
              value={userSignIn.password}
            />
            <FormText>Please enter your password </FormText>
            <FormFeedback valid>Valid password!</FormFeedback>
            <FormFeedback invalid>
              Invalid password. Must be 6 characters or more.
            </FormFeedback>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default SignInForm;
