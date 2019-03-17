import api from '../apis';
import userConstants from '../constants/user.constants';

export const fetchLogin = ({username, password}) => (dispatch) => {
  dispatch(request({username}));
  return api.auth.login(username, password)
    .then(() => {
      dispatch(success({username}));
    })
    .catch((err) => {
      console.log(
        err.message
      );
      dispatch(failure(err.message));
    });
};

export const clearErrMessage = () => ({type: userConstants.RESET_LOGIN_ERROR});

function request(user) { return { type: userConstants.LOGIN_REQUEST, user }; }
function success(user) { return { type: userConstants.LOGIN_SUCCESS, user }; }
function failure(error) { return { type: userConstants.LOGIN_FAILURE, error }; }
