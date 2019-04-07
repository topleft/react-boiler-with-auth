import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import * as userActions from './user.actions';
import userConstants from '../constants/user.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('user actions', () => {
  afterEach(() => {
  });

  it('creates a LOGIN_SUCCESS action when login is successful', () => {
    const res = {
      data: { login: 'token' },
      status: 200,
    };
    mockAxios.post.mockImplementationOnce( () =>  Promise.resolve(res) );
    const username = 'joe_schmoe';
    const password = 'password123';

    const expectedActions = [
      { type: userConstants.LOGIN_REQUEST , user: { username } },
      { type: userConstants.LOGIN_SUCCESS, user: { username } }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(userActions.fetchLogin({username, password}))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates a LOGIN_FAILURE action when login fails', () => {
    const err = {
      response: {
        data: {},
        status: 401,
      }
    };
    mockAxios.post.mockImplementationOnce( () =>  Promise.reject(err) );
    const username = 'joe_schmoe';
    const password = 'password123';

    const expectedActions = [
      { type: userConstants.LOGIN_REQUEST , user: { username } },
      { type: userConstants.LOGIN_FAILURE, error: 'Invalid username, password or both' }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(userActions.fetchLogin({username, password}))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
      .catch((err) => {
        expect(err.message).toEqual('Invalid username, password or both');
      });
  });

});


