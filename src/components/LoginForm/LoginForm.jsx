
/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import TextInput from '../TextInput';
import Button from '../Button';
import './styles.scss';


const LoginForm = (props) => {
  console.log('loaded the form comp');
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
          handleSubmit(values, () => setSubmitting(false));
          // setTimeout(() => {
          //   // throw new Error("error");
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 500);
        }}
        validationSchema={yup.object().shape({
          username: yup.string()
            .required('Required'),
          password: yup.string()
            .required('Required'),
        })}>
        {props => {
          const {
            values,
            touched,
            errors,
            // dirty,
            // isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              <TextInput
                label='Username'
                name='username'
                id='username'
                testAttr='username'
                value={values.username}
                message={errors.username}
                isValid={!(errors.username && touched.username)}
                handleBlur={handleBlur}
                handleChange={handleChange}/>
              <TextInput
                label='Password'
                name='password'
                id='password'
                testAttr='password'
                value={values.password}
                message={errors.password}
                isValid={!(errors.password && touched.password)}
                handleBlur={handleBlur}
                handleChange={handleChange}/>
              <div className='login-form__buttons'>
                <Button
                  disabled={Object.values(errors).length}
                  look='outline'
                  testAttr='login-submit'
                  type='submit'>
                  Submit
                </Button>
              </div>
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
