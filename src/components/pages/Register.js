import React, {Component} from 'react';
import JoinForm from '../micros/JoinForm';

class Register extends Component {

  render () {
    return(
      <div className="app">
        <div className="container">
          <JoinForm refetch={this.props.refetch}/>
        </div>
      </div>
    )
  }
}

export default Register;
