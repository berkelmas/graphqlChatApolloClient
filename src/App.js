import React, {Component} from 'react';
import './index.css';

import {Header} from './components/micros/Header';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';

import {SessionComponent} from './components/SessionComponent';
import AuthComponent from './components/AuthComponent';
import AlreadyAuthedComponent from './components/AlreadyAuthedComponent';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const Root = ({refetch, user}) => (
  <Router>
    <Header user= {user} refetch={refetch}/>
      <Switch>
        <Route path="/" exact render={() => (<Home user={user} />)} />
        <Route path="/login" exact render={() => (<AlreadyAuthedLogin user={user} refetch={refetch}/>)} />
        <Route path="/register" exact render={() => (<AlreadyAuthedRegister user={user} refetch={refetch} />)} />
        <Route path="/profile" exact render={() => (<AuthProfilePage user={user}/>)} />
        <Redirect to="/"/>
      </Switch>
  </Router>
)

const AlreadyAuthedLogin = AlreadyAuthedComponent(Login);
const AlreadyAuthedRegister = AlreadyAuthedComponent(Register);
const AuthProfilePage = AuthComponent(Profile);
const SessionRootComponent = SessionComponent(Root);

class App extends Component {
  render() {
    return (
      <div id="app">
          <div className="container">
            <SessionRootComponent/>
          </div>
      </div>
    );
  }
}

export default App;
