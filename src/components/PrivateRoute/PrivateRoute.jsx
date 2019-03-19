
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import authUtils from '../../utils/auth.utils';
import { get as _get } from 'lodash';
import './styles.scss';


const PrivateRoute = (props) => {
  const {
    path,
    render,
    component,
    history
  } = props;

  const from = _get(history, 'location.pathname', null);

  return authUtils.isLoggedIn()
    ? <Route
      path={path}
      render={render}
      component={component}/>
    : <Redirect to={
      {
        pathname: '/login',
        state: {from},
      }}/>;
};

PrivateRoute.propTypes = {
  component: PropTypes.element,
  history: PropTypes.object,
  path: PropTypes.string.isRequired,
  render: PropTypes.func,
};

export default withRouter(PrivateRoute);
