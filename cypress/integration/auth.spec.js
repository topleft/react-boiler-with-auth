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

  });

  it('should raise an error on blur if password is not filled in', () => {

  });

  it('should let user know if log in failed', () => {

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

  it('should redirect a newly authed user to the page they originally intended to visit (if any)', () => {

  });

});
