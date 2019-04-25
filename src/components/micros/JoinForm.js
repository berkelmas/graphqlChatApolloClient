import React from 'react';
import {Mutation} from 'react-apollo';
import {withRouter} from 'react-router-dom';

import {signUp} from '../../backend/mutation';

class JoinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      username: '',
      password: '',
      passwordconfirm: ''
    }
    this.updateState = this.updateState.bind(this);
    this.registerForm = this.registerForm.bind(this);
    this.formValidate = this.formValidate.bind(this);
  }

  formValidate() {
    let {username, password, passwordconfirm} = this.state;
    const isInValid = !username || !password || !passwordconfirm || password !== passwordconfirm;
    return isInValid;
   }

  updateState(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  registerForm(e, registerFunction) {
    registerFunction()
      .then(async ({data}) => {
        localStorage.setItem('token', data.signUpMutation.token);
        await this.props.refetch();
        this.props.history.push('/');
      })
      .catch(err => console.log('Kullanıcı Kaydı Oluşturulamadı...'));

    this.setState({
      username : '',
      password : '',
      passwordconfirm : ''
    })
    e.preventDefault();
  }

  render() {
    let {username, password} = this.state;
    return (
      <div>
        <Mutation mutation={signUp} variables={{username, password}}>
          {(registerFunction, {loading, error, data}) => (
            <form onSubmit={e => {
                this.registerForm(e, registerFunction);
              }} className="user-form">
                <label>
                    <input onChange={this.updateState} value={this.state.username} name="username" type="text" placeholder="username" />
                </label>
                <label>
                    <input onChange={this.updateState} value={this.state.password} name="password" type="password" placeholder="password" />
                </label>
                <label>
                    <input onChange={this.updateState} value={this.state.passwordconfirm} name="passwordconfirm" type="password" placeholder="confirm password" />
                </label>
                <label>
                    <button disabled={loading || this.formValidate() } type="submit">Join</button>
                </label>
                {loading && (<p>Yükleniyor...</p>)}
                {error && (<p>Kullanıcı Kaydı Oluşturulamadı Knk</p>)}
            </form>
          )}

        </Mutation>
      </div>
    )
  }
}

export default withRouter(JoinForm);
