import React, {Component} from 'react';
import {Snaps} from '../micros/Snaps';
import AddSnap from '../micros/AddSnap';

class Home extends Component {
  render () {
    return(
      <div className="app">
        <div className="container">
          <AddSnap user={this.props.user}/>
          <Snaps/>
        </div>
      </div>
    )
  }
}

export default Home;
