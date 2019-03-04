
const TOKEN_KEY = 'token';

export default {

  check() {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (!token) return false;
    const payload = this.decodePayload(token);
    return !this.isExpired(payload.exp);
  },

  decodePayload(rawToken) {
    const rawPayload = rawToken.split('.')[1];
    return JSON.parse(atob(rawPayload));
  },

  isExpired(date) {
    return parseInt(date) < Date.now();
  },

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  }

};
