import React from 'react'
import {Mutation} from 'react-apollo';
import {withRouter} from 'react-router-dom';
import {signIn} from '../../backend/mutation';

class LoginForm extends React.Component {
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
  }

  loginForm = (e, loginFunction) => {
    loginFunction()
      .then(async ({data}) => {
        localStorage.setItem('token', data.signInMutation.token);
        await this.props.refetch();
        this.props.history.push('/');
      })
      .catch(err => console.log('giriş yapılamadı...'))
    this.setState({
      username: '',
      password: ''
    })
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

export default withRouter(LoginForm);
