// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE4NjcwMjk2MTg5NjZ9.voxBnVVuzm9cXuDfha14c-bGSFvVaEZGz3kkcYjhD9Y';
  cy.server();
  cy.route('post', '/api/v1/login', {token}).as('loginRequest');
  cy.visit('localhost:8080/login');
  cy.get('[data-test=username]').type(username);
  cy.get('[data-test=password]').type(password);
  cy.get('[data-test=login-submit]').click();
  return cy.wait('@loginRequest');
});
