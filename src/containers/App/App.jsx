import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from '../Home';
import Private from '../Private';
import PageOne from '../PageOne';
import PageTwo from '../PageTwo';
import PrivateRoute from '../../components/PrivateRoute';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import '../../styles/main.scss';

const links = [
  {
    to: '/home',
    className: 'home',
    label: 'Home',
    authRequired: false,
    render: function HomeComp (props) {return <Home {...props}/>;}
  },{
    to: '/page-one',
    className: 'page-one',
    label: 'Page One',
    authRequired: false,
    render: PageOne
  },{
    to: '/page-two',
    className: 'page-two',
    label: 'Page Two',
    authRequired: false,
    render: PageTwo
  },{
    to: '/private',
    className: 'private',
    label: 'Private',
    authRequired: true,
    render: Private
  }
];

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
      <Header>
        <NavBar links={links}/>
      </Header>
      <div style={{marginLeft: '75rem'}}>
        <Switch>
          { links.map(renderRoute) }
          <Redirect to={'/home'}/>
        </Switch>
      </div>
    </Fragment>
  </Router>
);

export default hot(module)(App);


