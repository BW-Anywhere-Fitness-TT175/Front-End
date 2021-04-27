import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, FormGroup, Col, Label, Row, Input, Button } from 'reactstrap';
import BASE_URL from './BASE_URL.js';
import * as Yup from 'yup';
import Navbar from './Navbar.js';

const formInputStyles = {
  padding: '5px',
  margin: '5px',
};

const SignInForm = (props) => {
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  });

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    event.persist();
    validateChange(event);
    setUserSignIn({ ...userSignIn, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Log In form submitted');
    axios
      .post(BASE_URL, userSignIn) // WAITING ON ENDPOINT
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter valid email address.')
      .required('Email address required.'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters long.'),
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    console.log('form state change');
    formSchema.isValid(userSignIn).then((valid) => {
      console.log('valid?', valid);
      setButtonDisabled(!valid);
    });
  }, [userSignIn, formSchema]);

  const validateChange = (e) => {
    Yup.reach(formSchema, e.target.name)
      .validate()
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: '' });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  return (
    <>
      <Navbar />
      <div className='col-sm-12 col-md-6 offset-md-3'>
        <h3 className='col-sm-12 col-md-6 offset-md-3'>Sign In</h3>

        <Form name='signInForm' onSubmit={handleSubmit}>
          <Row>
            <Col>
              <FormGroup style={formInputStyles}>
                <Label htmlFor='email'>Email</Label>
                <Input
                  name='email'
                  onChange={handleChange}
                  value={userSignIn.email}
                />
                {errors.email.length > 0 ? (
                  <p className='error'>{errors.email}</p>
                ) : null}{' '}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup style={formInputStyles}></FormGroup>
              <Label htmlFor='password'>Password</Label>
              <Input
                name='password'
                onChange={handleChange}
                value={userSignIn.password}
              />
              {errors.password.length > 0 ? (
                <p className='error'>{errors.password}</p>
              ) : null}
            </Col>
          </Row>
          <Col className='col-sm-12 col-md-8 offset-md-3'>
            <FormGroup>
              <Button
                disabled={buttonDisabled}
                style={formInputStyles}
                id='loginButton'
                type='submit'>
                Sign In
              </Button>
            </FormGroup>
          </Col>
        </Form>
      </div>
    </>
  );
};

export default SignInForm;
