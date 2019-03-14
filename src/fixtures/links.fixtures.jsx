import React from 'react';
import Home from '../containers/HomeContainer';
import PrivateContainer from '../containers/PrivateContainer';
import PageOneContainer from '../containers/PageOneContainer';
import PageTwoContainer from '../containers/PageTwoContainer';

export default [
  {
    to: '/home',
    className: 'home',
    label: 'Home',
    authRequired: false,
    render: function HomeContainer (props) {return <Home {...props}/>;}
  },{
    to: '/page-one',
    className: 'page-one',
    label: 'Page One',
    authRequired: false,
    render: PageOneContainer
  },{
    to: '/page-two',
    className: 'page-two',
    label: 'Page Two',
    authRequired: false,
    render: PageTwoContainer
  },{
    to: '/private',
    className: 'private',
    label: 'Private',
    authRequired: true,
    render: PrivateContainer
  }
];
