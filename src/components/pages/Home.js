import React, {Component} from 'react';

import {Header} from '../micros/Header';
import {Snaps} from '../micros/Snaps';
import {AddSnap} from '../micros/AddSnap';

class Home extends Component {
  render () {
    return(
      <div className="app">
        <div class="container">
          <Header/>
          <AddSnap/>
          <Snaps/>
        </div>
      </div>
    )
  }
}

export default Home;
