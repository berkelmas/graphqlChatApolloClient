import React, {Component} from 'react';

import {Header} from '../micros/Header';
import {JoinForm} from '../micros/JoinForm';

class Register extends Component {
  render () {
    return(
      <div className="app">
        <div class="container">
          <Header/>
          <JoinForm/>
        </div>
      </div>
    )
  }
}

export default Register;
