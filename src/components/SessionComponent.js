import React from 'react';
import {Query} from 'react-apollo';

import {activeUser} from '../backend/query';

export const SessionComponent = Component => props => {
  return (
    <Query query={activeUser}>
      {({loading, error, data, refetch}) => {
        if (loading) return (<p>Geliyor knk</p>)
        if (error) return (<p>Bi Sorun var Knk</p>)
        else {
          console.log(data.activeUser)
          return (<Component {...props} refetch={refetch} user={data.activeUser} />)
        }
      }}
    </Query>
  )
}

//(data.activeUser ? <Component {...props} refetch={refetch} user={data.activeUser} /> : <Component {...props} refetch={refetch} /> )
