import React, { useState } from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  Col,
  Label,
  Row,
  Input,
  FormText,
  FormFeedback,
  Button,
} from 'reactstrap';

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
    axios
      .post('#', userSignIn)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

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
                value={userSignIn.password.x}
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
