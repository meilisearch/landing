const WAITING_TIME = 5000
// let scrollToBottom = require('scroll-to-bottomjs')

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
    cy.get('.hero').should('be.visible')
    cy.get('.demo').should('be.visible')
    cy.get('.openSource').should('be.visible')
    cy.get('.step1').should('be.visible')
    cy.get('.step2').should('be.visible')
    cy.get('.step3').should('be.visible')
    cy.get('.developer').should('be.visible')
    cy.get('.cards').should('be.visible')
    cy.get('.testimonials').should('be.visible')
    // cy.window().then(cyWindow =>
    //   scrollToBottom({ remoteWindow: cyWindow, frequency: 50, timing: 10 })
    // )
    cy.percySnapshot('home-hero-responsive', { widths: [768, 1024, 1440] })
  })
})
