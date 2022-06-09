const WAITING_TIME = 1000
const scrollToBottom = require('scroll-to-bottomjs')

describe(`Visual tests`, () => {
  it('Should take a snapshot of the home page', () => {
    cy.visit('/')
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow =>
      scrollToBottom({ remoteWindow: cyWindow, frequency: 80, timing: 10 })
    )
    cy.wait(WAITING_TIME)
    cy.get("img[alt='Developer']").should('be.visible')
    cy.get('[data-cy="meilisearch-logo-footer"]').should('be.visible')
    cy.get('[data-cy="meilisearch-logo-header"]').should('be.visible')
    cy.percySnapshot('home-responsive', { widths: [375, 1024, 1440] })
  })

  it('Should take a snapshot of the pricing page', () => {
    cy.visit('/pricing')
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }))
    cy.wait(WAITING_TIME)
    cy.get('[data-cy="meilisearch-logo-header"]').should('be.visible')
    cy.percySnapshot('pricing-responsive', { widths: [375, 1024, 1440] })
  })

  it('Should take a snapshot of the privacy policy page', () => {
    cy.visit('/privacy-policy')
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }))
    cy.wait(WAITING_TIME)
    cy.get('[data-cy="meilisearch-logo-header"]').should('be.visible')
    cy.percySnapshot('privacy-policy')
  })

  it('Should take a snapshot of the terms of use page', () => {
    cy.visit('/terms-of-use')
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }))
    cy.wait(WAITING_TIME)
    cy.get('[data-cy="meilisearch-logo-header"]').should('be.visible')
    cy.percySnapshot('terms-of-use')
  })

  it('Should take a snapshot of the 404 page', () => {
    cy.visit('/test', { failOnStatusCode: false })
    cy.wait(WAITING_TIME)
    cy.get('[data-cy="meilisearch-logo-header"]').should('be.visible')
    cy.percySnapshot('404')
  })
})
