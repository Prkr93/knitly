describe('Pattern', () => {
  it.skip('should automatically create a grid upon visiting the url', () => {
    cy.visit('http://localhost:3000/5x5')
      .get('section.pattern')
      .children('section.row').should('have.length', 5)
      .children('article.stitch').should('have.length', 25) //this might also be 5?
  });

  it.skip('should be able to have a dynamic pattern size', () => {
    cy.visit('http://localhost:3000/9x9')
  });

  it.skip('should be able to have another dynamic pattern size', () => {
    cy.visit('http://localhost:3000/1x9')
  });

  it.skip('should redirect if entered an invalid url', () => {
    cy.visit('http://localhost:3000/0x5', {failOnStatusCode: false})
      .url().should('be.equals', 'http://localhost:3000/')
      
  });
  
});