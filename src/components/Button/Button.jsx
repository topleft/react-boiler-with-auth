/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { props } from 'bluebird';


const Button = (props) => {
  const {
    testAttr,
    children,
    handleClick,
    type,
  } = props;

  return (
    <button
      onClick={handleClick}
      data-test={testAttr}
      className={`button button--${type}`}>
        {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'no-decor'
}

Button.propTypes = {
  testAttr: PropTypes.string,
  children: PropTypes.any,
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['no-decor', 'ouline'])
};

export default Button;
