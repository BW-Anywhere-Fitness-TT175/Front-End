import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  Col,
  Label,
  Row,
  Input,
  FormFeedback,
  Button,
} from 'reactstrap';
import BASE_URL from './BASE_URL.js';
import * as Yup from 'yup';
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';

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

  /*  Yup.reach(formSchema, name)
    .validate(value)
    .then((valid) => {
      setErrors({
        ...errors,
        [name]: '',
      });
    })
    .catch((err) => {
      setErrors({
        ...errors,
        [name]: err.errors[0],
      });
    });
  setUserSignIn({
    ...userSignIn,
    [name]: value,
  }); */
  return (
    <>
      <div className='col-sm-12 col-md-6 offset-md-3'>
        <h3 className='col-sm-12 col-md-6 offset-md-3'>Sign In</h3>

        <Form name='signInForm'>
          <Row>
            <Col>
              <FormGroup style={formInputStyles}>
                <Label for='email'>Email</Label>
                <Input
                  name='email'
                  onChange={handleChange}
                  value={userSignIn.email}
                />
                <FormFeedback valid>Email is available! </FormFeedback>
                <FormFeedback invalid>
                  Sorry, we do not recognize this email. Please sign up for a
                  new account.
                </FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup style={formInputStyles}></FormGroup>
              <Label for='password'>Password</Label>
              <Input
                name='password'
                onChange={handleChange}
                value={userSignIn.password}
              />
              <FormFeedback valid>Valid password!</FormFeedback>
              <FormFeedback invalid>
                Invalid password. Must be 6 characters or more.
              </FormFeedback>
            </Col>
          </Row>
          <Col className='col-sm-12 col-md-8 offset-md-3'>
            <FormGroup>
              <Button
                style={formInputStyles}
                id='loginButton'
                onClick={handleSubmit}>
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
