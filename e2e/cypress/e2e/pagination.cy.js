describe('Amazon Pagination Test', () => {
  it('Navigates to the next page of search results', () => {
    cy.visit('https://www.amazon.com');
    cy.get('#twotabsearchtextbox').type('laptop{enter}');
    cy.get('.s-pagination-next').click();
    cy.get('.s-main-slot').should('exist');
  });
});