import React from 'react';
import {Subscription} from 'react-apollo';
import {userRegisterSubs} from '../../backend/subscription';

export const UserRegisterSubscription = props => {
  return(
    <div>
      <Subscription subscription={userRegisterSubs}>
        {({loading, data, error}) =>
          loading ? <p></p> : <p>{data.userRegister.username} Aramıza Katıldı...</p>
        }
      </Subscription>
    </div>
  )
}
