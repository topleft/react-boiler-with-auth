import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PrivateRoute from '../../components/PrivateRoute';
import HeaderContainer from '../../containers/HeaderContainer';
import '../../styles/main.scss';
import fixtures from '../../fixtures';

const renderRoute = (props, index) => {
  const {
    to,
    render,
    authRequired,
  } = props;
  return authRequired
    ? <PrivateRoute
      key={index}
      path={to}
      render={render}/>
    : <Route
      key={index}
      path={to}
      render={render}/>;
};

renderRoute.propTypes = {
  to: PropTypes.string,
  render: PropTypes.oneOfType([
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
          <Redirect to={'/home'}/>
        </Switch>
      </div>
    </Fragment>
  </Router>
);

export default hot(module)(App);


