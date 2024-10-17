describe('Amazon Filter Products Test', () => {
  it('Applies filters and checks results', () => {
    cy.visit('https://www.amazon.com');
    cy.get('#twotabsearchtextbox').type('laptop{enter}');
    cy.get('span[data-component-type="s-search-results"]').should('exist');
    cy.get('input[name="p_n_is_free_shipping/10236242011"]').check({force: true});
    cy.get('span[data-component-type="s-search-results"]').should('exist');
  });
});