import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Form, FormGroup, Col, Label, Row, Input, Button } from 'reactstrap';
import BASE_URL from './BASE_URL.js';
import * as Yup from 'yup';
import Navbar from './Navbar.js';

const SignInForm = (props) => {
  // create history variable from props
  const history = props.history;

  // created ref variable for component
  //used for cleaning up async tasks
  const mountedRef = useRef(true);
  // Sets log in form state
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  });

  // user state to use after post call made
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  // event handler for form input
  const handleChange = (event) => {
    event.persist();
    validateChange(event);
    setUserSignIn({ ...userSignIn, [event.target.name]: event.target.value });
  };

  // event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Log In form submitted');
    axios
      .post(`${BASE_URL}/api/users/login`, userSignIn) //zz
      .then((res) => {
        console.log('success', res.data);
        setUser(res.data);
        openLogSuccess(user);
      })
      .catch((err) => console.log(err));
  };

  //redirects to logSuccess page
  const openLogSuccess = (props) => {
    const { user } = props;

    history.push(
      {
        pathname: '/logSuccess',
      },
      {
        some: user,
      }
    );
    return () => {
      mountedRef.current = false;
    };
  };

  // schema for form validation
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter valid email address.')
      .required('Email address required.'),
    password: Yup.string()
      .required('Password is required')
      .max(10, 'Password must be 10 chars or less long.'),
  });

  // state to hold errors produced by post call
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // disables submit button until form passes validation
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // whenever a change in form state is made, this runs to check validity
  useEffect(() => {
    console.log('form state change');
    formSchema.isValid(userSignIn).then((valid) => {
      console.log('valid?', valid);
      setButtonDisabled(!valid);
    });
  }, [userSignIn, formSchema]);

  //validates form
  const validateChange = (e) => {
    Yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
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
              <FormGroup>
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
              <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  onChange={handleChange}
                  value={userSignIn.password}
                />
                {errors.password.length > 0 ? (
                  <p className='error'>{errors.password}</p>
                ) : null}
              </FormGroup>
            </Col>
          </Row>
          <Col className='col-sm-12 col-md-8 offset-md-3'>
            <FormGroup>
              <Button
                disabled={buttonDisabled}
                id='loginButton'
                type='submit'
                onSubmit={handleSubmit}>
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
