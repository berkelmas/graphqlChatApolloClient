import React, {Component} from 'react';

import LoginForm from '../micros/LoginForm';

class Login extends Component {
  render () {
    return(
      <div className="app">
        <div className="container">
          <LoginForm refetch={this.props.refetch}/>
        </div>
      </div>
    )
  }
}

export default Login;
