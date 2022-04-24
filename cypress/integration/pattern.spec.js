describe('Pattern', () => {
  it('should automatically create a grid upon visiting the url', () => {
    cy.visit('http://localhost:3000/create/5x5')
      .get('section.pattern').within(pattern => {
        cy.get('section.row').should('have.length', 5)
          .find('article.stitch').should('have.length', 25) //this might also be 5?
      })
  });

  it('should be able to have a dynamic pattern size', () => {
    cy.visit('http://localhost:3000/create/9x9')
      .get('section.pattern').within(pattern => {
        cy.get('section.row').should('have.length', 9)
          .find('article.stitch').should('have.length', 81) //this might also be 5?
      })
  });

  it.skip('should be able to have another dynamic pattern size', () => {
    cy.visit('http://localhost:3000/1x9')
  });

  it.skip('should redirect if entered an invalid url', () => {
    cy.visit('http://localhost:3000/0x5', {failOnStatusCode: false})
      .url().should('be.equals', 'http://localhost:3000/')
      
  });
  
});