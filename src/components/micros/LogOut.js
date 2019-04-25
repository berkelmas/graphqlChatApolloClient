import React from 'react';
import {ApolloConsumer} from 'react-apollo';
import {withRouter} from 'react-router-dom';

const logOutEvent = async (refetch, history) => {
  await localStorage.setItem('token','');
  //await client.resetStore();
  history.push('/');
  await refetch();

}

const LogOut = ({refetch, history}) => (
  <ApolloConsumer>
    {client => {
      return (
        <button style={{display:'inline', all: 'unset'}} onClick={() => logOutEvent(refetch, history)} >Çıkış Yap</button>
      )
    }}
  </ApolloConsumer>
)

export default withRouter(LogOut);
