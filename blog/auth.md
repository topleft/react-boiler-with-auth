### Requirements

1. Allow a user to sign up for an account
1. Allow a user to login
1. Allow a user to logout
1. Allow public pages to be seen by anyone
1. Allow private pages to only be seen by authed users
1. Provide form validation and error messages before submit


### Frame out tests

If we satisfy all of these we should ave a pretty solid auth system.

```js


describe('log in form', () => {

  it('should raise an error on blur if username is not filled in', () => {

  });

  it('should raise an error on blur if password is not filled in', () => {

  });

  it('should let user know if log in failed', () => {

  });

});

describe('sin up form', () => {

  it('should raise an error on blur if username is not filled in', () => {

  });

  it('should raise an error on blur if password is not filled in', () => {

  });

  it('should raise an error on blur if confirm password is not filled in', () => {

  });

  it('should raise an error on blur if password and confirm password do not match', () => {

  });

  it('should let user know if sign up failed', () => {

  });

});

describe('authentication: UN-AUTHED', () => {

  it('should allow an un-authed user to see public page', () => {

  });

  it('should NOT allow an un-authed user to see private page', () => {

  });

  it('should NOT show an un-authed user sign out button', () => {

  });

  it('should show an un-authed user the sign up button', () => {

  });

  it('should show an un-authed user the log in button', () => {

  });

  it('should redirect un-authed user to log in when they click on an a private link', () => {

  });

  it('should redirect a newly authed user to the page they originally intended to visit (if any)', () => {

  });

});

describe('authentication: AUTHED', () => {

  it('should allow an authed user to sign out', () => {

  });

  it('should allow an authed user to see a public page', () => {

  });

  it('should allow an authed user to see a private page', () => {

  });

  it('should NOT show an authed user the sign up button', () => {

  });

  it('should NOT show an authed user the log in button', () => {

  });

});


```
