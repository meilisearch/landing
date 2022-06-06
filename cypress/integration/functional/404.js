describe(`404`, () => {
  it('Should visit the 404 page', () => {
    cy.visit('/test', { failOnStatusCode: false })
    cy.url().should('match', new RegExp(`${Cypress.config('baseUrl')}/test`))
    cy.contains('Sorry, the page you are looking for does not exist.')
  })

  it('Should have a link bringing to home page', () => {
    cy.get('a > span').contains('Bring me home, please').click()
    cy.url().should('match', new RegExp(Cypress.config('baseUrl')))
  })
})
