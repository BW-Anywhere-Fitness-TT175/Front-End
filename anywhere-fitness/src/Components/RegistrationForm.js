import React, { useState } from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  Label,
  Col,
  Row,
  Input,
  FormFeedback,
  Button,
} from 'reactstrap';

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

  // sets state of user after form submitted
  const [user, setUser] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone: '',
    role_id: '',
  });

  //change handler for form
  const handleChange = (event) => {
    if (event.target.name === 'role_id') {
      event.target.value = parseInt(event.target.value);
    } else {
      setNewUserForm({
        ...newUserForm,
        [event.target.name]: event.target.value,
      });
    }
  };

  // event handler for submitting form
  const submitNewUserForm = (event) => {
    event.preventDefault();
    axios
      .post('#', newUserForm)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log);
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
              <FormFeedback valid>Email is available!</FormFeedback>
              <FormFeedback invalid>
                Sorry, that email is already registered. Please sign in or enter
                a different email.
              </FormFeedback>
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
              <FormFeedback valid>Valid password!</FormFeedback>
              <FormFeedback invalid>
                Invalid password. Must be length of 6 or more.
              </FormFeedback>
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
                  <option value='1'>Instructor</option>
                  <option value='2'>Student</option>
                </Input>
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

              <FormFeedback>
                First name is required and must be at least 2 characters long.
              </FormFeedback>
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

              <FormFeedback invalid>
                Last name is required and must be at least 2 characters long.
              </FormFeedback>
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
            </FormGroup>
          </Col>
        </Row>

        <FormGroup className='col-sm-12 col-md-6 offset-md-3'>
          <Button
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
