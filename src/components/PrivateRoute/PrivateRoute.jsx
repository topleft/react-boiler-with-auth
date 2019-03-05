/* eslint-disable */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../utils/auth';
import './styles.scss';


const PrivateRoute = (props) => {
  const {
    path,
    render
  } = props;
  return auth.isLoggedIn()
    ? <Route
        path={to}
        render={render}/>
    : <Redirect to={'/home'}/>;
}

PrivateRoute.propTypes = {

};

export default PrivateRoute;
