const WAITING_TIME = 5000
let scrollToBottom = require('scroll-to-bottomjs')

describe(`Homepage`, () => {
  before(() => {
    // Recreate the movies index with documents in it
    cy.fixture('movies.json').then(movies => {
      cy.addDocuments('movies', movies)
      cy.wait(WAITING_TIME)
    })
  })

  it('Should visit the Home page', () => {
    cy.visit('/')
    cy.wait(WAITING_TIME)
    cy.url().should('match', new RegExp(Cypress.config('baseUrl')))
  })

  it('Should match snapshot', () => {
    cy.visit('/')
    cy.window().then(cyWindow =>
      scrollToBottom({ remoteWindow: cyWindow, frequency: 50, timing: 10 })
    )
    cy.percySnapshot('home-hero-responsive')
  })
})
