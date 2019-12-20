describe('page', () => {
  it('works', () => {
      cy.visit('https://dvanakoncisveta.cz/');
      cy.get('nav').toMatchImageSnapshot();
  })
})
