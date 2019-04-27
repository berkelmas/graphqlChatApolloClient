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
        .then(res => console.log(res))
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

  render() {
    return (
      <div>
        <div className="description">
            <p className="sub_header__desc">simple snap app with <span>react</span>.</p>
            {this.state.emptyWarning}
        </div>

        <div>
          {this.props.user &&
            <Mutation mutation={snapMutation}
              variables={
                {
                  user_id: this.props.user.id,
                  text: this.state.snap}
                }
              refetchQueries={[{query: allSnaps}]}
              >
              {(addSnapFunction, {loading, error, data}) => (
                <form onSubmit={e => this.sendSnap(e, addSnapFunction)}>
                    <input name="snap" value={this.state.snap} onChange={this.updateState} className="add-snap__input" type="text" placeholder="add snap" />
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
