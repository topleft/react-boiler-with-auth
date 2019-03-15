import React from 'react';
import Header from '../../components/Header/Header';
import fixtures from '../../fixtures';

class HeaderContainer extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Header links={fixtures.links}/>
    );
  }
}

export default HeaderContainer;
