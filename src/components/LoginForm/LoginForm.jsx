
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const LoginForm = (props) => {
  const {
    handleSubmit
  } = props;

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
