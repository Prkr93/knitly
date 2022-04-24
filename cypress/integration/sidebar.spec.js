describe('MirrorMode', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/create/5x5')
  })
  it('should be able to toggle mirror mode, and create two stitches, mirrored across the middle', () => {
    cy.get('.mirror-mode').click()
      .get('.pattern .stitch:first').click()
      .should('have.class', 'purl')
      .get('.row:first .stitch:last').should('have.class', 'purl')
  });

  it('should also apply the stitch color to the mirrored stitch', () => {
    cy.get('.mirror-mode').click()
      .get('.stitch-colors .blue').click()
      .get('.pattern .stitch:first').click().should('have.class', 'blue')
      .get('.row:first .stitch:last').should('have.class', 'blue')
  });

  it('should mirror any stitch, with the middle only triggering a single stitch if numColumns is odd', () => {
    cy.get('.mirror-mode').click()

      .get('.row:first').within(stitches => {
          cy.get('.stitch').eq(0).click().should('have.class', 'purl')
          cy.get('.stitch').eq(4).should('have.class', 'purl')

          // cy.get('.stitch').eq(0)
          cy.get('.stitch').eq(3).click().should('have.class', 'purl')
          cy.get('.stitch').eq(1).should('have.class', 'purl')
          cy.get('.stitch').eq(2).click().should('have.class', 'purl')
      })
      
  });
});

describe('StitchOptions', () => {
  it('should have multiple stitch types', () => {
    cy.get('.stitch-types').within(types => {
      cy.get('.knit')
      cy.get('.purl')
      cy.get('.k2tog')
      cy.get('.ssk')
    })
  });
  it('should be able to stitch any color of the rainbow', () => {
    cy.get('.stitch-colors').within(colors => {
      cy.get('.red')
      cy.get('.orange')
      cy.get('.yellow')
      cy.get('.green')
      cy.get('.blue')
      cy.get('.indigo')
      cy.get('.violet')
    })
  });
});