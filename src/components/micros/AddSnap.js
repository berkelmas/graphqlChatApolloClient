import React from 'react'
import {Mutation} from 'react-apollo';

import {snapMutation} from '../../backend/mutation';
import {allSnaps} from '../../backend/query';

class AddSnap extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      snap: '',
      emptyWarning: ''
    }
  }

  sendSnap = (e, addSnapFunction) => {
    if (this.state.snap !== '') {
      addSnapFunction()
        .then(res => res)
        .catch(err => console.log(err))
      this.setState({
        snap: '',
        emptyWarning: ''
      })
      e.preventDefault();
    } else {
      this.setState({
        emptyWarning: 'Knk boş gönderemiyon'
      })
      e.preventDefault();
    }
  }


  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateCache = (cache, {data : {snapMutation}}) => {
    const {allSnaps: snaps} = cache.readQuery({
      query: allSnaps
    })
    cache.writeQuery({
      query: allSnaps,
      data: {
        allSnaps: [...snaps, snapMutation]
      }
    })
  }

  render() {
    const {snap} = this.state;
    return (
      <div>
        <div className="description">
            <p className="sub_header__desc">simple snap app with <span>react</span>.</p>
            {this.state.emptyWarning}
        </div>

        <div>
          {this.props.user &&
            <Mutation
              mutation={snapMutation}
              variables={{text: snap, user_id: this.props.user.id}}
              update={this.updateCache}
              optimisticResponse={{
                __typename: "Mutation",
                snapMutation: {
                  __typename: "snapMutation",
                  id: Math.round(Math.random()*-200000), // - li id olursa; html style değiştireceğiz.
                  text: snap,
                  user_id: this.props.user.id,
                  user: {
                    __typename: "User",
                    id: this.props.user.id,
                    username: this.props.user.username
                  }
                }
              }}
            >
              {(addSnapFunction, {loading, error, data}) => (
                <form onSubmit={e => this.sendSnap(e, addSnapFunction)}>
                    <input name="snap" value={this.state.snap} onChange={this.updateState} className="add-snap__input" type="text" placeholder="add snap" />
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <button style={{margin: '5px', padding: '10px', color : 'gray', backgroundColor: 'white'}} type="submit">Gönder</button>
                    </div>

                </form>
              )}
            </Mutation>
          }
        </div>
      </div>
    )
  }
}

export default AddSnap;
