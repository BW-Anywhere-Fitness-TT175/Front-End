import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
//import { createBrowserHistory } from 'history';

//const history = createBrowserHistory();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
