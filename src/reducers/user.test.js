import userReducer from './user';
import userConstants from '../constants/user';
import { Map, fromJS } from 'immutable';
import authUtils from '../utils/auth';
jest.mock('../utils/auth');

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
      user,
    });
    expect(userReducer(undefined, action)).toEqual(expected);
  });

  it('should return empty state on LOGIN_FAILURE', () => {
    const action = {
      type: userConstants.LOGIN_FAILURE,
    };
    const expected = Map({});
    expect(userReducer(undefined, action)).toEqual(expected);
  });

});
