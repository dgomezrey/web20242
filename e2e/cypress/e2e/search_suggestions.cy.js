describe('Amazon Search Suggestions Test', () => {
  it('Displays search suggestions when typing', () => {
    cy.visit('https://www.amazon.com');
    cy.get('#twotabsearchtextbox').type('laptop');
    cy.get('.s-suggestion').should('have.length.greaterThan', 0);
  });
});