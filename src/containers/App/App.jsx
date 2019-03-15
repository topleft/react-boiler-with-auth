import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PrivateRoute from '../../components/PrivateRoute';
import HeaderContainer from '../../containers/HeaderContainer';
import LoginContainer from '../LoginContainer/LoginContainer';
import '../../styles/main.scss';
import fixtures from '../../fixtures';

const renderRoute = (props, index) => {
  const {
    to,
    render,
    component,
    authRequired,
  } = props;

  if (render && component)
    throw new Error(
      'Must only supply either render or component prop, not both.'
    );

  return authRequired
    ? <PrivateRoute
      key={index}
      path={to}
      component={component}
      render={render}/>
    : <Route
      key={index}
      path={to}
      component={component}
      render={render}/>;
};

renderRoute.propTypes = {
  to: PropTypes.string,
  render: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]),
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]),
  authRequired: PropTypes.bool,
};

const App = () => (
  <Router>
    <Fragment>
      <HeaderContainer />
      <div className='namespace__body'>
        <Switch>
          { fixtures.links.map(renderRoute) }
          <Route to={'/login'} component={LoginContainer}/>
          <Redirect to={'/home'}/>
        </Switch>
      </div>
    </Fragment>
  </Router>
);

export default hot(module)(App);


