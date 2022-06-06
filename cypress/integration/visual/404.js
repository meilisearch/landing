const WAITING_TIME = 1000

describe(`Legal`, () => {
  it('Should take a snapshot of the 404 page', () => {
    cy.visit('/test', { failOnStatusCode: false })
    cy.wait(WAITING_TIME)
    cy.percySnapshot('404')
  })
})
