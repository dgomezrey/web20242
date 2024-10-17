describe('Amazon Product Details Test', () => {
  it('Displays product details when clicked', () => {
    cy.visit('https://www.amazon.com');
    cy.get('#twotabsearchtextbox').type('laptop{enter}');
    cy.get('.s-main-slot .s-title').first().click();
    cy.get('#productTitle').should('be.visible');
  });
});