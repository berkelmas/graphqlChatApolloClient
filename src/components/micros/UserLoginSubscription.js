import React from 'react';
import {Subscription} from 'react-apollo';
import {userLoginSubs} from '../../backend/subscription';

export const UserLoginSubscription = props => {
  return(
    <div>
      <Subscription subscription={userLoginSubs}>
        {({loading, error, data}) => loading ? <p></p> : <p>{data.userLogin.username} Giriş Yaptı.</p>}
      </Subscription>
    </div>
  )
}
