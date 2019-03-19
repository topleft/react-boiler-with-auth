import userReducer from './user.reducer';
import userConstants from '../constants/user.constants';
import { Map } from 'immutable';
import authUtils from '../utils/auth.utils';
jest.mock('../utils/auth.utils');

describe('user reducer',() => {


  it('should return correct initial state when user is NOT logged in', () => {
    const expected = Map({});
    expect(userReducer()).toEqual(expected);
  });

  it('should return correct initial state when user is logged in', () => {
    const user = Map({username: 'joe_schmoe'});
    authUtils.isLoggedIn.mockReturnValue(true);
    authUtils.getUser.mockReturnValue(user);
    const expected = Map({
      isLoggedIn: true,
      user,
    });
    expect(userReducer()).toEqual(expected);
  });

  it('should return correct state on LOGIN_REQUEST', () => {
    const user = Map({username: 'joe_schmoe'});
    const action = {
      type: userConstants.LOGIN_REQUEST,
      user
    };
    const expected = Map({
      isLoggedIn: false,
      isLoggingIn: true,
      errMessage: null,
      user,
    });
    expect(userReducer(undefined, action)).toEqual(expected);
  });

  it('should return correct state on LOGIN_SUCCESS', () => {
    const user = Map({username: 'joe_schmoe'});
    const action = {
      type: userConstants.LOGIN_SUCCESS,
      user
    };
    const expected = Map({
      isLoggedIn: true,
      isLoggingIn: false,
      errMessage: null,
      user,
    });
    expect(userReducer(Map({}), action)).toEqual(expected);
  });

  it('should return empty state on LOGIN_FAILURE', () => {
    const errMessage = 'Error';
    const action = {
      type: userConstants.LOGIN_FAILURE,
      error: errMessage
    };
    const expected = Map({errMessage});
    expect(userReducer(undefined, action)).toEqual(expected);
  });

  it('should return empty errMessage field in state on RESET_LOGIN_ERROR', () => {
    const action = {
      type: userConstants.RESET_LOGIN_ERROR,
    };
    const expected = Map({errMessage: null});

    expect(userReducer(Map({}), action)).toEqual(expected);
  });

});
