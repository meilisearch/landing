const WAITING_TIME = 5000

describe(`Homepage`, () => {
  it('Should visit the Home page', () => {
    cy.visit('/')
    cy.wait(WAITING_TIME)
    cy.url().should('match', new RegExp(Cypress.config('baseUrl')))
  })

  it('Should match snapshot', () => {
    cy.visit('/')
    cy.wait(WAITING_TIME)
    cy.percySnapshot('home-hero-responsive', { widths: [768, 1024, 1440] })
  })
})
