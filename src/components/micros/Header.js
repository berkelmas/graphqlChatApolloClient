import React from 'react';
import {NavLink} from 'react-router-dom';
import LogOut from './LogOut';

export const Header = ({user, refetch}) => {
  return user ? (
    <div className="header">
        <div className="logo">
            <h2 className="logo__title">Adliye Chat</h2>
        </div>

        <div className="header_menu">
            <NavLink exact to="/" >snaps</NavLink>
            <NavLink exact to="/profile" >profile</NavLink>

            <LogOut refetch={refetch}/>
        </div>
    </div>
  ) : (
    <div className="header">
        <div className="logo">
            <h2 className="logo__title">easysnap</h2>
        </div>

        <div className="header_menu">
            <NavLink exact to="/" >snaps</NavLink>
            <NavLink exact to="/login" >login</NavLink>
            <NavLink exact to="/register">join</NavLink>
        </div>
    </div>
  )
}
