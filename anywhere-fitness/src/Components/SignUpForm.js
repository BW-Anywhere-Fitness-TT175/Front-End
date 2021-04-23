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
  FormText,
  Button,
} from 'reactstrap';

const formInputsStyles = {
  padding: '10px',
  margin: '10px',
};

const SignUpForm = (props) => {
  //state for signup form
  const [newUserForm, setNewUserForm] = useState({
    newUsername: '',
    newUserPassword: '',
    newUserPasswordReEnter: '',
    newUserFirstName: '',
    newUserLastName: '',
    newUserAddress: '',
    newUserAddressLine2: '',
    newUserCity: '',
    newUserState: '',
    newUserZip: '',
    newUserPhone: '',
    newUserAccountType: '',
  });

  // sets state of user after form submitted
  const [user, setUser] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    accountType: '',
  });

  //change handler for form
  const handleChange = (event) => {
    setNewUserForm({ ...newUserForm, [event.target.name]: event.target.value });
  };

  // event handler for submitting form
  const submitNewUserForm = (event) => {
    event.preventDefault();
    axios.post('#', newUserForm).then((res) => {
      setUser(res.data);
    });
  };

  return (
    <>
      <div className='col-sm-12 col-md-6 offset-md-3'>
        <h1>New Account Registration</h1>
      </div>
      <Form name='signUpForm'>
        <Row>
          <Col>
            <FormGroup style={formInputsStyles}>
              <Label for='newUsername'>Username</Label>
              <Input name='newUsername' onChange={handleChange} />
              <FormText>Please enter your username.</FormText>
              <FormFeedback valid>Username is available!</FormFeedback>
              <FormFeedback invalid>
                Sorry, that username is already taken. Please choose another
                username.
              </FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <FormGroup style={formInputsStyles}>
              <Label for='newUserPassword'>Password</Label>
              <Input name='newUserPassword' />
              <FormText>Please enter your password.</FormText>
              <FormFeedback valid>Valid password!</FormFeedback>
              <FormFeedback invalid>
                Invalid password. Must be length of 6 or more.
              </FormFeedback>
            </FormGroup>
          </Col>
          <Col lg={5}>
            <FormGroup style={formInputsStyles}>
              <Label for='newUserPasswordReEnter'>Re-Enter Password</Label>
              <Input name='newUserPasswordReEnter' />
              <FormText>Please re-enter your password.</FormText>
              <FormFeedback valid>Passwords match!</FormFeedback>
              <FormFeedback invalid>Passwords do not match</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <FormGroup style={formInputsStyles}>
              <Label for='newUserFirstName'>First Name</Label>
              <Input name='newUserFirstName' />
              <FormText>Please enter First Name.</FormText>
              <FormFeedback>
                First name is required and must be at least 2 characters long.
              </FormFeedback>
            </FormGroup>
          </Col>
          <Col lg={5}>
            <FormGroup style={formInputsStyles}>
              <Label for='newUserLastName'>Last Name</Label>
              <Input name='newUserLastName' />
              <FormText>Please enter Last Name.</FormText>
              <FormFeedback invalid>
                Last name is required and must be at least 2 characters long.
              </FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <FormGroup style={formInputsStyles}>
              <Label for='newUserAddress'>Address</Label>
              <Input name='newUserAddress' />
              <FormText>Please enter address.</FormText>
              <FormFeedback invalid>Address is required.</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <FormGroup style={formInputsStyles}>
              <Label for='newUserAddressLine2'>Address Line 2</Label>
              <Input name='newUserAddressLine2' />
              <FormText>Please enter apartment, suite info.</FormText>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <FormGroup style={formInputsStyles}>
              <Label for='newUserCity'>City</Label>
              <Input name='newUserCity' />
              <FormText>Please enter city.</FormText>
              <FormFeedback invalid>City is required</FormFeedback>
            </FormGroup>
          </Col>
          <Col lg={2}>
            <FormGroup style={formInputsStyles}>
              <Label for='newUserState'>Select state:</Label>
              <Input type='select' name='newUserState' id='newUserState'>
                <option>AL</option>
                <option>AK</option>
                <option>AZ</option>
                <option>AR</option>
                <option>CA</option>
                <option>CO</option>
                <option>CT</option>
                <option>DE</option>
                <option>FL</option>
                <option>GA</option>
                <option>HI</option>
                <option>ID</option>
                <option>IL</option>
                <option>IN</option>
                <option>IA</option>
                <option>KS</option>
                <option>KY</option>
                <option>LA</option>
                <option>ME</option>
                <option>MD</option>
                <option>MA</option>
                <option>MI</option>
                <option>MN</option>
                <option>MS</option>
                <option>MO</option>
                <option>MT</option>
                <option>NE</option>
                <option>NV</option>
                <option>NH</option>
                <option>NJ</option>
                <option>NM</option>
                <option>NY</option>
                <option>NC</option>
                <option>ND</option>
                <option>OH</option>
                <option>OK</option>
                <option>OR</option>
                <option>PA</option>
                <option>RI</option>
                <option>SC</option>
                <option>SD</option>
                <option>TN</option>
                <option>TX</option>
                <option>UT</option>
                <option>VT</option>
                <option>VA</option>
                <option>WA</option>
                <option>WV</option>
                <option>WI</option>
                <option>WY</option>
              </Input>
              <FormText>Please choose state.</FormText>
            </FormGroup>
          </Col>
          <Col lg={3}>
            <FormGroup style={formInputsStyles}>
              <Label for='newUserZip'>Zip Code</Label>
              <Input name='newUserZip' />
              <FormText Text>Please enter zip code.</FormText>
              <FormFeedback invalid>Zip code is required.</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label lg={2} for='newUserAccountType'>
              Account Type:
            </Label>
            <Label lg={3} radio>
              <Input
                name='newUserAccountType'
                type='radio'
                value='instructor'
              />
              Instructor
            </Label>
            <Label lg={3} radio>
              <Input name='newUserAccountType' type='radio' value='student' />
              Student
            </Label>
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

export default SignUpForm;
