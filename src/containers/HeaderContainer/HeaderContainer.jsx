import React from 'react';
import PropTypes from 'prop-types';
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

HeaderContainer.propTypes = {

};

export default HeaderContainer;
