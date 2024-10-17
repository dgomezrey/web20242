describe('Amazon Search Test', () => {
  it('Searches for a product and verifies results', () => {
    cy.visit('https://www.amazon.com');
    cy.get('#twotabsearchtextbox').type('laptop{enter}');
    cy.get('.s-main-slot').should('exist');
  });
});