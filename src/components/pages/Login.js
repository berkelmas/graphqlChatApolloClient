import React, {Component} from 'react';

import {Header} from '../micros/Header';
import {LoginForm} from '../micros/LoginForm';

class Login extends Component {
  render () {
    return(
      <div className="app">
        <div class="container">
          <Header/>
          <LoginForm/>
        </div>
      </div>
    )
  }
}

export default Login;
