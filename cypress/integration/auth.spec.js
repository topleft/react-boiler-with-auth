import { TOKEN_KEY } from '../../src/utils/auth.utils';

describe('sign up form', () => {

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

describe('log in form', () => {

  it('should not render header', () => {
    cy.visit('localhost:8080/login');
    cy.get('header').should('not.have.length');
  });

  it('should raise an error on blur if username is not filled in', () => {
    cy.visit('localhost:8080/login');
    cy.get('[data-test=input-message]').should('have.length', 0);
    cy.get('[data-test=password]').focus().blur();
    cy.get('[data-test=input-message]').should('have.length', 1);
    cy.get('[data-test=input-message]').should('have.text', 'Required');
  });

  it('should raise an error on blur if password is not filled in', () => {
    cy.visit('localhost:8080/login');
    cy.get('[data-test=input-message]').should('have.length', 0);
    cy.get('[data-test=username]').focus().blur();
    cy.get('[data-test=input-message]').should('have.length', 1);
    cy.get('[data-test=input-message]').should('have.text', 'Required');
  });

  it('should let user know if log in failed', () => {
    const data = {
      username: 'pasta',
      password: 'm3@tba11$'
    };
    cy.server();
    cy.route({
      method: 'post',
      url: '/api/v1/login',
      status: 401,
      response: {message: 'foobar'}
    }).as('loginRequest');
    cy.visit('localhost:8080/login');
    cy.get('[data-test=username]').type(data.username);
    cy.get('[data-test=password]').type(data.password);
    cy.get('[data-test=login-submit]').click({force: true});
    cy.wait('@loginRequest')
      .then(() => {
        cy.url().should('eq', 'http://localhost:8080/login');
        cy.get('[data-test=login-notification]').should('have.length', 1);
        cy.get('[data-test=login-notification]').should('have.text', 'Invalid username, password or both');
      });
  });

  it('should successfully submit login', () => {
    const data = {
      username: 'pasta',
      password: 'm3@tba11$'
    };
    cy.clearLocalStorage();
    expect(window.localStorage[TOKEN_KEY]).not.to.exist;
    cy.login(data.username, data.password)
      .then((xhr) => {
        expect(xhr.request.body).to.eql(data);
        expect(window.localStorage[TOKEN_KEY]).to.exist;
      });
  });

  it('should redirect a newly authed user to their dashboard', () => {
    const data = {
      username: 'pasta',
      password: 'm3@tba11$'
    };
    cy.login(data.username, data.password)
      .then(() => {
        cy.url().should('eq', 'http://localhost:8080/private');
      });
  });

  it.only('should redirect a newly authed user to the page they originally intended to visit (if any)', () => {
    const data = {
      username: 'pasta',
      password: 'm3@tba11$'
    };
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE4NjcwMjk2MTg5NjZ9.voxBnVVuzm9cXuDfha14c-bGSFvVaEZGz3kkcYjhD9Y';
    cy.server();
    cy.route('post', '/api/v1/login', {token}).as('loginRequest');
    cy.visit('localhost:8080/private2');
    cy.url().should('eq', 'http://localhost:8080/login');
    cy.get('[data-test=username]').type(data.username);
    cy.get('[data-test=password]').type(data.password);
    cy.get('[data-test=login-submit]').click({force: true});
    cy.wait('@loginRequest')
      .then(() => {
        cy.url().should('eq', 'http://localhost:8080/private2');
      });
  });


});

describe('authentication: UN-AUTHED', () => {

  it('should allow an un-authed user to see public page', () => {
    cy.visit('localhost:8080/home');
    cy.url().should('eq', 'http://localhost:8080/home');
  });

  it('should NOT allow an un-authed user to see private page', () => {
    cy.visit('localhost:8080/private');
  });

  it('should redirect un-authed user to log in when they click on an a private link', () => {
    cy.visit('localhost:8080/private');
    cy.url().should('eq', 'http://localhost:8080/login');

  });

  it('should show an un-authed user the log in button', () => {
    cy.visit('localhost:8080/home');
    cy.get('[data-test=login-button]').should('have.length', 1);
  });

  it('should show an un-authed user the sign up button', () => {
    cy.visit('localhost:8080/home');
    cy.get('[data-test=login-button]').should('have.length', 1);

  });

  it('should NOT show an un-authed user the logout button', () => {
    cy.visit('localhost:8080/home');
    cy.get('[data-test=logout-button]').should('have.length', 0);
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
