import authApi from '../apis/auth';
import userConstants from '../constants/user';

export const fetchLogin = ({username, password}) => (dispatch) => {
  dispatch(request({username}));
  return authApi.login(username, password)
    .then(() => {
      dispatch(success({username}));
    })
    .catch((err) => {
      dispatch(failure(err.message));
    });
};

function request(user) { return { type: userConstants.LOGIN_REQUEST, user }; }
function success(user) { return { type: userConstants.LOGIN_SUCCESS, user }; }
function failure(error) { return { type: userConstants.LOGIN_FAILURE, error }; }
