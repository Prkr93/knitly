describe('Pattern', () => {
  it('should automatically create a pattern grid upon visiting path create/XxY', () => {
    cy.visit('http://localhost:3000/create/5x5')
      .get('section.pattern').within(pattern => {
        cy.get('section.row').should('have.length', 5)
          .find('article.stitch').should('have.length', 25)
      })
  });

  it('should be able to have a dynamic pattern size', () => {
    cy.visit('http://localhost:3000/create/9x9')
      .get('section.pattern').within(pattern => {
        cy.get('section.row').should('have.length', 9)
          .find('article.stitch').should('have.length', 81)
      })
  });

  it('should be able to have another dynamic pattern size', () => {
    cy.visit('http://localhost:3000/create/1x9')
      .get('section.pattern').within(pattern => {
        cy.get('section.row').should('have.length', 1)
          .find('article.stitch').should('have.length', 9)
      })
  });

  it('should redirect if navigating to an invalid url', () => {
    cy.visit('http://localhost:3000/create/0x5', {failOnStatusCode: false})
      .url().should('contain', 'http://localhost:3000/create')
  });
  
});