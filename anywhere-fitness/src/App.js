import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import SignInForm from './Components/SignInForm';
import Home from './Components/Home.js';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={RegistrationForm} />
        <Route path='/logIn' component={SignInForm} />
      </Switch>
    </>
  );
};

export default App;
