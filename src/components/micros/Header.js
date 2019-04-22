import React from 'react';
import {NavLink} from 'react-router-dom';

export const Header = (props) => {
  return(
    <div class="header">
        <div class="logo">
            <h2 class="logo__title">easysnap</h2>
        </div>

        <div class="header_menu">
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
