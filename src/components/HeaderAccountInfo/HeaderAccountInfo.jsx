/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './styles.scss';


const HeaderAccountInfo = (props) => {
  const {
    username
  } = props;

  return (
    <div className='header-account-info'>
      {
        username
        ?
        <div className='header-account-info__buttons'>
          {username}
          <Button testAttr='logout-button'>Log Out</Button>
        </div>
        :
        <div className='header-account-info__buttons'>
          <Button testAttr='login-button'>Log In</Button>
          <Button testAttr='signup-button'>Sign Up</Button>
        </div>
      }
    </div>
  );
}

HeaderAccountInfo.propTypes = {
  username: PropTypes.string
};

export default HeaderAccountInfo;
