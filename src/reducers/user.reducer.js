import { Map, fromJS } from 'immutable';
import userConstants from '../constants/user.constants';
import authUtils from '../utils/auth.utils';

// initialState as a function allows for cleaner testing
const getInitialState = () => (
  authUtils.isLoggedIn()
    ?
    Map({
      user: authUtils.getUser(),
      isLoggedIn: true,
    })
    : Map({})
);

export const initialState = getInitialState();

export default function user( state=getInitialState(), action={} ) {
  switch(action.type) {
    case userConstants.LOGIN_REQUEST:
      return state
        .set('user', fromJS(action.user))
        .set('isLoggingIn', true)
        .set('isLoggedIn', false)
        .set('errMessage', null);
    case userConstants.LOGIN_SUCCESS:
      return state
        .set('user', fromJS(action.user))
        .set('isLoggedIn', true)
        .set('isLoggingIn', false)
        .set('errMessage', null);
    case userConstants.LOGIN_FAILURE:
      return Map({errMessage: action.error});
    case userConstants.RESET_LOGIN_ERROR:
      return state.set('errMessage', null);
    default:
      return state;
  }
}
