import React from 'react'
import {Mutation} from 'react-apollo';
import {signIn} from '../../backend/mutation';

export class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      username: '',
      password: ''
    }
  }

  formValidate = () => {
    let {username, password} = this.state;
    const validate = username === '' || password === ''
    return validate;
  }

  updateState = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
    e.preventDefault();
  }

  loginForm = (e, loginFunction) => {
    loginFunction()
      .then(res => localStorage.setItem('token', res.data.signInMutation.token))
      .catch(err => console.log('giriş yapılamadı...'))
    e.preventDefault();
  }

  render() {
    let {username, password} = this.state;
    return (
      <Mutation mutation={signIn} variables={{username, password}}>
        {(loginFunction, {loading, error, data}) => (
          <form onSubmit={e => this.loginForm(e, loginFunction)} className="user-form">
              <label>
                  <input onChange={this.updateState} name="username" value={this.state.username} type="text" placeholder="username" />
              </label>
              <label>
                  <input onChange={this.updateState} name="password" value={this.state.password} type="password" placeholder="password" />
              </label>
              <label>
                  <button disabled={loading || this.formValidate()}>Login</button>
              </label>
              {error && <p>Giriş Yapılamadı Knk</p>}
          </form>
        )}
      </Mutation>
    )
  }
}
