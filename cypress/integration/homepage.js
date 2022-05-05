const WAITING_TIME = 5000
let scrollToBottom = require('scroll-to-bottomjs')

describe(`Homepage`, () => {
  it('Should visit the Home page', () => {
    cy.visit('/')
    cy.wait(WAITING_TIME)
    cy.url().should('match', new RegExp(Cypress.config('baseUrl')))
  })

  it('Should match snapshot', () => {
    cy.visit('/')
    cy.wait(WAITING_TIME)
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }))
    cy.percySnapshot('home-hero-responsive', { widths: [768, 1024, 1440] })
  })
})
