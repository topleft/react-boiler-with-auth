describe('navigation', () => {

  before(() => {
    cy.visit('http://localhost:8080/');
  });

  it('should initially load the events page', () => {
    cy.get('.navbar a.home')
      .should('have.class', 'active');
    cy.get('.navbar').find('.active')
      .should('have.length', 1);
    cy.get('.page__title')
      .should('contain', 'Home');
  });

  it(`should change pages when clicking on 'Page One' navbar link`, () => {
    cy.get(`.navbar a.page-one`).click();
    cy.get(`.navbar a.page-one`).should('have.class', 'active');
    cy.get('.navbar').find('.active')
      .should('have.length', 1);
    cy.get('.page__title')
      .should('contain', 'PageOne');
  });

  it(`should change pages when clicking on 'Page Two' navbar link`, () => {
    cy.get(`.navbar a.page-two`).click();
    cy.get(`.navbar a.page-two`).should('have.class', 'active');
    cy.get('.navbar').find('.active')
      .should('have.length', 1);
    cy.get('.page__title')
      .should('contain', 'PageTwo');
  });
})
