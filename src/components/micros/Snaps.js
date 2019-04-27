import React, {Fragment} from 'react'
import {Query} from 'react-apollo';
import {allSnaps} from '../../backend/query';

export const Snaps = props => {
  return (
    <Query query={allSnaps}>
      {({loading, error, data, refetch}) => {
        if (loading) return (<p>Geliyor Knk</p>)
        if (error) return (<p>Yükleniyor Knk</p>)
        else {
          return (
          <div>
            <div>
                <ul className="snaps">
                  {data.allSnaps.slice(0).reverse().map(res => (
                    <Fragment key={res.id}>
                      <li>
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
