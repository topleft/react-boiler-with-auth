
I am trying to spy on an ES6 module with jest. In the code below, I would like to know if `auth.setToken` is called.

```js
// ./src/apis/auth.js

import axios from 'axios';
import auth from '../utils/auth';

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
        throw new Error('Error on login', err);
      });
  }
}

```

```js
// ./src/utils/auth.js
const TOKEN_KEY = 'token';

export default {

  setToken(token) {
    console.log('in that set');
    localStorage.setItem(TOKEN_KEY, token);
  }

};

```


```js
// ./src/apis/auth.test.js

import mockAxios from 'axios';
import authApi from './auth';
import auth from '../utils/auth';

const AUTH_API_BASE_URL = 'http://www.localhost:3000';

describe('authApi', () => {

  it('login', () => {

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
    authApi.login(username, password);

    expect(mockAxios.post).toHaveBeenCalledWith(
      `${AUTH_API_BASE_URL}/api/v1/login`,
      {
        username,
        password
      }
    );
    expect(spy).toHaveBeenCalledTimes(1);
  });
})

```

The above test fails because the spy has not been called. But with a console log in the `authApi.login` function I have confirmed that the
