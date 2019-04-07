/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { props } from 'bluebird';

const getClass = (props) => {
  const {
    look,
    disabled,
    fullWidth,
  } = props;
  return `
    button button--${look}
    ${disabled ? 'disabled' : ''}
    ${fullWidth ? 'full-width' : ''}
  `
}

const Button = (props) => {
  const {
    testAttr,
    children,
    handleClick,
    look,
    type,
    disabled,
  } = props;

  return (
    <button
      type={type}
      onClick={handleClick}
      data-test={testAttr}
      className={getClass(props)}>
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
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  handleClick: PropTypes.func,
  look: PropTypes.oneOf(['no-decor', 'outline']),
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};

export default Button;
