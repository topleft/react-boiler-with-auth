import mockAxios from 'axios';
import authApi from './auth';
import auth from '../utils/auth';

const AUTH_API_BASE_URL = 'http://www.localhost:3000';

describe('authApi', () => {

  it('calls the user service and then calls setToken on SUCCESS', (done) => {

    const spy = jest.spyOn(auth, 'setToken');
    const res = {
      data: { token: 'token' },
      status: 200,
    }
    mockAxios.post.mockImplementationOnce( () =>
      Promise.resolve(res)
    );

    const username = 'tester';
    const password = 'secret';
    authApi.login(username, password)
      .then(() => {

        expect(mockAxios.post).toHaveBeenCalledWith(
          `${AUTH_API_BASE_URL}/api/v1/login`,
          {
            username,
            password
          }
        );
        expect(spy).toHaveBeenCalledWith('token');

        done();
      });
  });

  it('calls the user service and then calls logout on FAILURE', (done) => {

    const logout = jest.spyOn(auth, 'logout');
    const res = {
      status: 401,
    }
    mockAxios.post.mockImplementationOnce( () =>
      Promise.resolve(res)
    );

    const username = 'tester';
    const password = 'secret';
    authApi.login(username, password)
      .then(() => done('error: should not call then block'))
      .catch(() => {
        expect(mockAxios.post).toHaveBeenCalledWith(
          `${AUTH_API_BASE_URL}/api/v1/login`,
          {
            username,
            password
          }
        );
        expect(logout).toHaveBeenCalledWith();
        done();
      });

  });
})
