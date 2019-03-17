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
    look,
    type,
  } = props;

  return (
    <button
      type={type}
      onClick={handleClick}
      data-test={testAttr}
      className={`button button--${look}`}>
        {children}
    </button>
  );
}

Button.defaultProps = {
  look: 'no-decor',
  default: 'button'
}

Button.propTypes = {
  testAttr: PropTypes.string,
  children: PropTypes.any,
  handleClick: PropTypes.func,
  look: PropTypes.oneOf(['no-decor', 'outline']),
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};

export default Button;
