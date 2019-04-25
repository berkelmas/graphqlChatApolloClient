import React from 'react';
import {Redirect} from 'react-router-dom';

const AuthComponent = Component => props => {
  return (props.user ? <Component {...props} /> : <Redirect to="/" />)
}

export default AuthComponent;

//if (props.user) return (<Component {...props} />)
//else return (<p>Giriş Yapman Lazım Knk</p>)
