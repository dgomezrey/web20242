describe('Amazon Add to Cart Test', () => {
  it('Adds product to cart successfully', () => {
    cy.visit('https://www.amazon.com');
    cy.get('#twotabsearchtextbox').type('laptop{enter}');
    cy.get('.s-main-slot .s-title').first().click();
    cy.get('#add-to-cart-button').click();
    cy.get('#nav-cart-count').should('have.text', '1');
  });
});