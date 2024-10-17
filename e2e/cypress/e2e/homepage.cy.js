describe('Amazon Home Page Load Test', () => {
  it('Should load the Amazon home page', () => {
    cy.visit('https://www.amazon.com');
    cy.get('#nav-logo-sprites').should('be.visible');
    cy.get('#twotabsearchtextbox').should('be.visible');
  });
});