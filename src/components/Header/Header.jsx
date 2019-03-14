import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar';
import HeaderAccountInfo from '../../components/HeaderAccountInfo';
import './styles.scss';


const Header = (props) => {
  const {
    links
  } = props;

  return (
    <header className='header'>
      <div className={'header__logo'}>
        LOGO
      </div>
      <div className={'header__nav'}>
        <NavBar links={links}></NavBar>
      </div>
      <div className={'header__account'}>
        <HeaderAccountInfo/>
      </div>
    </header>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf({
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  })
};

export default Header;
