/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TextInput = (props) => {
  const {
    message,
    handleBlur,
    handleChange,
    id,
    isValid,
    label,
    name,
    testAttr,
  } = props;
  return (
    <div className='text-input'>
      <label htmlFor={id}>{label}</label>
      <input
        className={
          isValid ? 'text-input__input' : 'text-input__input error'
        }
        id={id}
        name={name}
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        data-test={testAttr}/>
      <div className='text-input__message'>
      {
        !isValid
        ? <span data-test='input-message'>{message}</span>
        : <span>&nbsp;</span>
      }
      </div>
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  id: PropTypes.string.isRequired,
  testAttr: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
  message: PropTypes.string

};

export default TextInput;
