import React, { useState } from 'react';
//import axios from 'axios';
import {
    Form,
    FormGroup,
    Col,
    Row,
    Input,
    FormText,
    FormFeedback
} from 'reactstrap';
import styled from 'styled-components';

const formInputStyles = {
    padding: '10px',
    margin: '10px',
}

const SignInForm = (props) => {
    const [userSignIn, setUserSignIn] = useState ({
        signInEmail: '',
        signInUserPassword: '',
    })

const handleChange = (event) => {
    setUserSignIn({...userSignIn, [event.target.name]: event.target.value });
}

return (
 <>
    <div className='col-sm-12 col-md-6 offset-md-3'>
        <h3>Sign In</h3><h1>Welcome Back!</h1>
    </div>
    <Form name='signInForm'>
        <Col className='col-sm-12 col-md-6 offset-md-3'>
            <FormGroup style={formInputStyles}>
                <FormText>Please enter your email </FormText>
                <Input name='signInEmail' onChange={handleChange}>
                    <FormFeedback valid>Email is available! </FormFeedback>
                    <FormFeedback invalid>
                        Sorry, this email does not exist. Please use a valid username.
                    </FormFeedback>
                </Input>
            </FormGroup>
         </Col>
         <Row>
             <Col lg={5}>
                 <FormGroup style={formInputStyles}></FormGroup>
                 <FormText>Please enter your password </FormText>
                 <Input name='userSignInPassword'>
                     <FormFeedback valid>Valid password!</FormFeedback>
                     <FormFeedback invalid>Invalid password. Must be 6 characters or more.
                     </FormFeedback>
                 </Input>
             </Col>
         </Row>
    </Form>
    </>
);
};

export default SignInForm;