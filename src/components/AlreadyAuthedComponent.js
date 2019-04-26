import React from 'react';
import {Redirect} from 'react-router-dom';

const AlreadyAuthedComponent = Component => props => (
  props.user ? <Redirect to="/" /> : <Component {...props} />
)

export default AlreadyAuthedComponent;
