import auth from './auth';

const validMockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE4NjcwMjk2MTg5NjZ9.voxBnVVuzm9cXuDfha14c-bGSFvVaEZGz3kkcYjhD9Y";
const expiredMockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1NTE2NjkzNTAwMTZ9.i6iuJni8rb0ZQdtZy439-6BETjt5oP56OmIz6-kvDWU";

describe('auth.check', () => {
  test('returns false if it does not find a token in local storage', () => {
    expect(auth.check()).toBe(false);
  });

  test('returns false if the token is expired', () => {
    window.localStorage.setItem('token', expiredMockToken);
    expect(auth.check()).toBe(false);
  });

  test('returns true if the token is valid', () => {
    window.localStorage.setItem('token', validMockToken);
    expect(auth.check()).toBe(true);
  });
});
