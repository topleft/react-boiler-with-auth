import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PrivateRoute from '../../components/PrivateRoute';
import HeaderContainer from '../../containers/HeaderContainer';
import LoginContainer from '../LoginContainer/LoginContainer';
import '../../styles/main.scss';
import fixtures from '../../fixtures';

const renderRoute = (props, index) => {
  const {
    path,
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
      path={path}
      component={component}
      render={render}/>
    : <Route
      key={index}
      path={path}
      component={component}
      render={render}/>;
};

renderRoute.propTypes = {
  path: PropTypes.string,
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

const App = ({location}) => (
  <Fragment>
    { location.pathname != '/login' ? <HeaderContainer /> : null}
    <div className='namespace__body'>
      <Switch>
        { fixtures.links.map(renderRoute) }
        <Route path={'/login'} component={LoginContainer}/>
        <Redirect to={'/home'}/>
      </Switch>
    </div>
  </Fragment>
);

App.propTypes = {
  location: PropTypes.object
};

export default hot(module)(withRouter(App));


