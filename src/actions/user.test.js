import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import * as userActions from './user';
import userConstants from '../constants/user';

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

  it('creates a LOGIN_SUCCESS action when login is successful', () => {
    const res = {
      data: {},
      status: 401,
    };
    mockAxios.post.mockImplementationOnce( () =>  Promise.resolve(res) );
    const username = 'joe_schmoe';
    const password = 'password123';

    const expectedActions = [
      { type: userConstants.LOGIN_REQUEST , user: { username } },
      { type: userConstants.LOGIN_FAILURE, error: 'Error on login' }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(userActions.fetchLogin({username, password}))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

});


