
const TOKEN_KEY = 'token';

export default {

  isLoggedIn() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return false;
    const payload = this._decodePayload(token);
    return !this._isExpired(payload.exp);
  },

  _decodePayload(rawToken) {
    const rawPayload = rawToken.split('.')[1];
    return JSON.parse(atob(rawPayload));
  },

  _isExpired(date) {
    return parseInt(date) < Date.now();
  },

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  },

  getUser() {
    const user = localStorage.getItem('user');
    return user
      ? Map(JSON.parse(user))
      : null;

  }


};
