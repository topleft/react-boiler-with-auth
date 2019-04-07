import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import Page from 'components/Page';
import LoginForm from '../../components/LoginForm/LoginForm';
import { bindActions } from '../../actions';



class LoginContainer extends React.Component {

  constructor() {
    super();
  }

  handleLogin(data, cb) {
    this.props.userActions.fetchLogin(data)
      .then(() => {
        cb();
        const { history } = this.props;
        const from = _get(history, 'location.state.from', '/private');
        this.props.history.push(from);
      })
      .catch((error) => {
        console.log('error', error);
        cb();
      });
  }

  render() {

    const {
      user,
      userActions,
    } = this.props;

    return (
      <Fragment>
        <Page title='Login'>
          <LoginForm
            handleSubmit={(data, cb) => this.handleLogin(data, cb)}
            notification={user.get('errMessage')}
            closeNotification={userActions.clearErrMessage}
          />
        </Page>
      </Fragment>
    );
  }
}

LoginContainer.propTypes = {
  user: PropTypes.object,
  userActions: PropTypes.object,
  history: PropTypes.object.isRequired,
};

export default connect(
  function mapStateToProps( state ){ return { user: state.get('user') }; },
  function mapDispatchToProps( dispatch ){ return { userActions: bindActions(dispatch).user }; }
)(LoginContainer);
