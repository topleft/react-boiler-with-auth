/* eslint-disable */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import authUtils from '../../utils/auth.utils';
import './styles.scss';


const PrivateRoute = (props) => {
  const {
    path,
    render
  } = props;
  return authUtils.isLoggedIn()
    ? <Route
        path={to}
        render={render}/>
    : <Redirect to={'/login'}/>;
}

PrivateRoute.propTypes = {

};

export default PrivateRoute;
