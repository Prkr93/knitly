describe('Stitch', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/create/5x5')
  })

  it('should be dimensions 2em by 2em', () => {
    cy.get('.pattern .stitch')
      .should('have.css', 'width', '32px').and('have.css', 'height', '32px')
  });

  it('should have a border 1px solid black', () => {
    cy.get('.stitch')
      .should('have.css', 'border', '1px solid #6a6a6a')
  });

  it('should have a knit stitch by default', () => {
    cy.get('.pattern .stitch')
      .should('have.class', 'knit')
  });

  it('should be able to toggle a stitch', () => {
    cy.get('.pattern .stitch:first')
      .click()
      .should('have.class', 'purl')
  });

  it('should be able to click a specific stitch to change the stitch type', () => {
    cy.get('.stitch-types')
      .find('.ssk').click()
      .get('.pattern .stitch:first').click()
      .should('have.class', 'ssk')
  });

  it('should also be able to select a background color', () => {
    cy.get('.stitch-colors')
      .find('.blue').click()
      .get('.pattern .stitch:first').click()
      .should('have.class', 'blue')
  });


});
