/* eslint-disable */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import authUtils from '../../utils/auth.utils';
import './styles.scss';


const PrivateRoute = (props) => {
  const {
    path,
    render,
    component,
  } = props;
  return authUtils.isLoggedIn()
    ? <Route
        path={path}
        render={render}/>
    : <Redirect to={'/login'}/>;
}

PrivateRoute.propTypes = {
  component: PropTypes.element,
  path: PropTypes.string,
  render: PropTypes.func,
};

export default PrivateRoute;
