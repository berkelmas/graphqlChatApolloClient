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
        <p style={{display:'inline'}} onClick={() => logOutEvent(refetch, history)} >Çıkış Yap</p>
      )
    }}
  </ApolloConsumer>
)

export default withRouter(LogOut);
