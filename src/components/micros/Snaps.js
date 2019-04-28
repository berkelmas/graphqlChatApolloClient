import React, {Fragment} from 'react'
import {Query} from 'react-apollo';
import {allSnaps} from '../../backend/query';

import {UserLoginSubscription} from './UserLoginSubscription';
import {UserRegisterSubscription} from './UserRegisterSubscription';
import {snapAddedSubs} from '../../backend/subscription';

export const Snaps = props => {
  return (
    <Query query={allSnaps}>
      {({loading, error, data, subscribeToMore}) => {
        if (loading) return (<p>Geliyor Knk</p>)
        if (error) return (<p>Yükleniyor Knk</p>)
        if (data) {

          subscribeToMore({
            document: snapAddedSubs,
            updateQuery: (prev, {subscriptionData}) => {
              if(!subscriptionData.data) return prev;

              const newSnap = subscriptionData.data.snapSubscription;
              if(!prev.allSnaps.find(snap => snap.id === newSnap.id)) {
                return ({
                  ...prev,
                  allSnaps: [...prev.allSnaps, newSnap]
                });
              } else {
                return prev;
              }

            }
          })

          return (
          <div>
            <div>
                <ul className="snaps">
                  <UserLoginSubscription/>
                  <UserRegisterSubscription/>
                  {data.allSnaps.slice(0).reverse().map(res => (
                    <Fragment key={res.id}>
                      <li className={res.id < 0 ? 'optimistic' : 'yok'}>
                          <div className="title">{res.text}</div>
                          <div className="date">
                              <span>{res.user.username}</span>

                          </div>
                      </li>
                    </Fragment>
                  ))}
                </ul>
            </div>
            <div className="counter">{data.allSnaps.length} snap(s)</div>
          </div>
        )}
      }}
    </Query>
  )
}
