import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import SignInForm from './Components/SignInForm';
import Home from './Components/Home.js';
import RegistrationSuccess from './Components/RegistrationSuccess.js';
import LogInSuccess from './Components/LogInSuccess.js';

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/register' component={RegistrationForm} />
        <Route path='/logIn' component={SignInForm} />
        <Route path='/regSuccess' component={RegistrationSuccess} />
        <Route path='/logSuccess' component={LogInSuccess} />
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  );
};

export default App;
