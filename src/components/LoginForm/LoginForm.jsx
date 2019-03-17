
/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import TextInput from '../TextInput';
import Button from '../Button';
import './styles.scss';


const LoginForm = (props) => {
  const {
    handleSubmit,
    notification,
    closeNotification,
  } = props;

  return (
    <div className='login-form'>
      <div
        className={`login-form__notification ${notification ? 'show' : ''}`}
        onClick={closeNotification}>
        {notification
          ?
          <span
            data-test='login-notification'
            className='message'>
            {notification}
          </span>
          : null
        }
      </div>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('in here');
          return handleSubmit(values, () => setSubmitting(false));
        }}>
        {props => {
          const {
            values,
            touched,
            errors,
            // dirty,
            // isSubmitting,
            handleChange,
            // handleBlur,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <TextInput
                name='username'
                id='username'
                testAttr='username'
                value={values.username}
                isValid={errors.username && touched.username}
                handleChange={handleChange}/>
              <TextInput
                name='password'
                id='password'
                testAttr='password'
                value={values.password}
                isValid={errors.password && touched.password}
                handleChange={handleChange}/>
              <Button
                testAttr='login-submit'
                type='submit'>
                Submit</Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired,
  notification: PropTypes.string,
  closeNotification: PropTypes.func.isRequired,
};

export default LoginForm;
