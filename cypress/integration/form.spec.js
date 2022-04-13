describe('Form', () => {
  it.skip('should display a form for grid input and be able to enter a number for x and y values', () => {
    cy.visit('http://localhost:3000')
      .get('form.create-form')
      .children('input.x-val').invoke('attr', 'type').should('contain', 'number')
      .type('3')
      .parent('.label-input.x-val')
      .siblings('.label-input.y-val')
      .children('input.y-val').invoke('attr', 'type').should('contain', 'number')
      .type('3')
  });

  it.skip('should create a new pattern on submit, ie 5x5', () => {
    cy.visit('http://localhost:3000')
      .get('input.x-val').type('5')
      .get('input.y-val').type('5')

      .get('.create-form')
      .children('button.create-button')
      .click()
      .url().should('contain', 'http://localhost:3000/5x5')
  });

  it.skip('should automatically create a grid upon visiting the url', () => {
    cy.visit('http://localhost:3000/5x5')
      .get('section.pattern')
      .children('article.stitch').should('have.length', 25)
  });

  
});
