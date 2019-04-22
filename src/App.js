import React, {Component} from 'react';
import './index.css';

import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Redirect to="/" />
    </Switch>
  </Router>
)

class App extends Component {
  render() {
    return (
      <div id="app">
          <div class="container">
            <Root/>
          </div>
      </div>
    );
  }
}

export default App;
