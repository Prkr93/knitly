describe('Dashboard', () => {
  it.skip('should display a header, main, and footer', () => {
    cy.visit('http://localhost:3000')
      .get('header')
      .siblings('main')
      .siblings('footer')
  });

  it.skip('should display a form for grid input', () => {
    cy.visit('http://localhost:3000')
      .get('main')
      .children('form.create-grid-form')
  });

});
