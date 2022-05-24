const WAITING_TIME = 5000
let scrollToBottom = require('scroll-to-bottomjs')

describe(`Homepage`, () => {
  before(() => {
    cy.log(Cypress.env())
    // Creates the movies index with documents in it
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

  context('Has blocks', () => {
    it('Has an hero block', () => {
      cy.get('.hero').should('be.visible')
    })
    it('Has a demo block', () => {
      cy.get('.demo').should('be.visible')
    })
    it('Has an openSource block', () => {
      cy.get('.openSource').should('be.visible')
    })
    it('Has a step1 block', () => {
      cy.get('.step1').should('be.visible')
    })
    it('Has a step2 block', () => {
      cy.get('.step2').should('be.visible')
    })
    it('Has a step3 block', () => {
      cy.get('.step3').should('be.visible')
    })
    it('Has a developer block', () => {
      cy.get('.developer').should('be.visible')
    })
    it('Has a cards block', () => {
      cy.get('.cards').should('be.visible')
    })
    it('Has a testimonials block', () => {
      cy.get('.testimonials').should('be.visible')
    })
  })
  it('Should take a snapshot', () => {
    cy.visit('/')
    cy.wait(WAITING_TIME)
    cy.log(Cypress.env())
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow =>
      scrollToBottom({ remoteWindow: cyWindow, frequency: 80, timing: 10 })
    )
    cy.wait(WAITING_TIME)
    cy.get("img[alt='Developer']").should('be.visible')
    cy.get('.meilisearch-logo-footer').should('be.visible')
    cy.get('.ais-Hits-list').should('be.visible')
    cy.percySnapshot('home-hero-responsive')
  })
})
