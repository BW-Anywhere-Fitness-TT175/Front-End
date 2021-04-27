import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Col, Row, Input, Button } from 'reactstrap';
import BASE_URL from './BASE_URL.js';
import * as Yup from 'yup';

const formInputsStyles = {
  padding: '5px',
  margin: '5px',
};

const RegistrationForm = (props) => {
  //state for signup form
  const [newUserForm, setNewUserForm] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    role_id: '',
  });

  //set state for axios post call
  const [post, setPost] = useState([]);

  // sets state of user after form submitted
  const [user, setUser] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone: '',
    role_id: '',
  });

  //sets state to control if form may be submitted. Only enables if form passes validation.
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // state for errors returned from form validation
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    role_id: '',
  });

  //change handler for form changes
  const handleChange = (event) => {
    const newFormData = {
      ...newUserForm,
      [event.target.name]:
        event.target.type === 'select'
          ? event.target.selected
          : event.target.value,
    };

    validateChange(event);
    console.log('ERRORS: ', errors);
    setNewUserForm(newFormData);
  };

  // event handler for submitting form
  const submitNewUserForm = (event) => {
    event.preventDefault();
    console.log('registration form submitted');
    axios
      .post(BASE_URL, newUserForm)
      .then((res) => {
        setPost(res.data);
        console.log('success', post);
        setUser(res.data);
        setNewUserForm({
          email: '',
          password: '',
          first_name: '',
          last_name: '',
          phone: '',
          role_id: '',
        });
      })
      .catch((err) => console.log(err.response));
  };

  // formSchema outlining shape of form
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter valid email address.')
      .required('Email address is required.'),
    password: Yup.string()
      .required('Password is required.')
      .min(6, 'Password must be 6 or more chars long.'),
    first_name: Yup.string()
      .required('First name is required')
      .min(2, 'First name must be 2 or more chars long.'),
    last_name: Yup.string()
      .required('Last name is required.')
      .min(2, 'Last name must be at least 2 chars long.'),
    phone_number: Yup.string()
      .required('Phone number is required.')
      .min(10, 'Phone number must be 10 chars long.')
      .max(10, 'Phone number must be 10 chars long.'),
    role_id: Yup.string().required('Please choose type of account.'),
  });

  // checks form validity on state change
  useEffect(() => {
    console.log('reg form state change');
    formSchema.isValid(newUserForm).then(
      (valid) => {
        console.log('valid?', valid);
        setButtonDisabled(!valid);
      },
      [formSchema, newUserForm]
    );
  });

  // validate change from handleChange
  const validateChange = (e) => {
    Yup.reach(formSchema, e.target.name)
      .validate(
        e.target.name === 'role_id' ? e.target.selected : e.target.value
      )
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: '',
        });
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
      <div className='col-sm-8 col-md-4 offset-lg-2'>
        <h1>New Account Registration</h1>
      </div>
      <Form name='signUpForm'>
        <Row>
          <Col lg={7}>
            <FormGroup style={formInputsStyles}>
              <Label htmlFor='email'>Email</Label>
              <Input
                name='email'
                onChange={handleChange}
                value={newUserForm.email}
              />
              {errors.email.length > 0 ? (
                <p className='error'>{errors.email}</p>
              ) : null}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <FormGroup style={formInputsStyles}>
              <Label htmlFor='password'>Password</Label>
              <Input
                name='password'
                onChange={handleChange}
                value={newUserForm.password}
              />
              {errors.password.length > 0 ? (
                <p className='error'>{errors.password}</p>
              ) : null}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup style={formInputsStyles}>
              <Label lg={2} htmlFor='role_id'>
                Account Type:
              </Label>
              <Col lg={2}>
                <Input
                  type='select'
                  name='role_id'
                  onChange={handleChange}
                  value={newUserForm.role_id}>
                  <option default>Select</option>
                  <option value='1'>Instructor</option>
                  <option value='2'>Student</option>
                </Input>
                {errors.role_id.length > 0 ? (
                  <p className='error'>{errors.role_id}</p>
                ) : null}
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <FormGroup style={formInputsStyles}>
              <Label htmlFor='first_name'>First Name</Label>
              <Input
                name='first_name'
                onChange={handleChange}
                value={newUserForm.first_name}
              />
              {errors.first_name.length > 0 ? (
                <p className='error'>{errors.first_name}</p>
              ) : null}
            </FormGroup>
          </Col>
          <Col lg={5}>
            <FormGroup style={formInputsStyles}>
              <Label htmlFor='last_name'>Last Name</Label>
              <Input
                name='last_name'
                onChange={handleChange}
                value={newUserForm.last_name}
              />
              {errors.last_name.length > 0 ? (
                <p className='error'>{errors.last_name}</p>
              ) : null}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <FormGroup style={formInputsStyles}>
              <Label htmlFor='phone_number'>Phone Number</Label>
              <Input
                name='phone_number'
                onChange={handleChange}
                value={newUserForm.phone_number}
              />
              {errors.phone_number.length > 0 ? (
                <p className='error'>{errors.phone_number}</p>
              ) : null}
            </FormGroup>
          </Col>
        </Row>

        <FormGroup className='col-sm-12 col-md-6 offset-md-3'>
          <Button
            disabled={buttonDisabled}
            style={formInputsStyles}
            id='submitButton'
            onClick={submitNewUserForm}>
            Submit
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default RegistrationForm;
