import React from 'react';
import {NavLink} from 'react-router-dom';

export const Header = (props) => {
  return(
    <div className="header">
        <div className="logo">
            <h2 className="logo__title">easysnap</h2>
        </div>

        <div className="header_menu">
          <NavLink exact to="/" >
            <div>
                snaps
            </div>
          </NavLink>

            <NavLink exact to="/login" >
              <div>
                  login
              </div>
            </NavLink>

            <NavLink exact to="/register" >
              <div>
                  join
              </div>
            </NavLink>
        </div>
    </div>
  )
}
