import React from 'react';
import Home from '../containers/HomeContainer';
import PrivateContainer from '../containers/PrivateContainer';
import PageOneContainer from '../containers/PageOneContainer';
import PageTwoContainer from '../containers/PageTwoContainer';

export default [
  {
    path: '/home',
    className: 'home',
    label: 'Home',
    authRequired: false,
    render: function HomeContainer (props) {return <Home {...props}/>;}
  },{
    path: '/page-one',
    className: 'page-one',
    label: 'Page One',
    authRequired: false,
    render: PageOneContainer
  },{
    path: '/page-two',
    className: 'page-two',
    label: 'Page Two',
    authRequired: false,
    render: PageTwoContainer
  },{
    path: '/private',
    className: 'private',
    label: 'Private',
    authRequired: true,
    render: PrivateContainer
  },{
    path: '/private2',
    className: 'private2',
    label: 'Private2',
    authRequired: true,
    render: PrivateContainer
  }
];
