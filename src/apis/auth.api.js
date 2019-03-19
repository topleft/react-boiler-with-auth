import axios from 'axios';
import auth from '../utils/auth.utils';
import { get as _get } from 'lodash';

const AUTH_API_BASE_URL = 'http://www.localhost:3000';

export default {
  login(username, password) {
    return axios.post(`${AUTH_API_BASE_URL}/api/v1/login`, {
      username,
      password
    })
      .then((res) => {
        if (res.status === 200) {
          const token = res.data.token;
          auth.setToken(token);
          return true;
        } else {
          throw new Error('Invalid response on login', res);
        }
      })
      .catch((err) => {
        auth.logout();
        const status = _get(err, 'response.status', null);
        switch(status) {
          case 401:
            throw new Error('Invalid username, password or both');
          default:
            throw new Error(err);
        }
      });
  }
};
