const WAITING_TIME = 1000
let scrollToBottom = require('scroll-to-bottomjs')

describe(`Legal`, () => {
  it('Should take a snapshot of the privacy policy page', () => {
    cy.visit('/privacy-policy')
    cy.wait(WAITING_TIME)
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }))
    cy.wait(WAITING_TIME)
    cy.percySnapshot('privacy-policy', { widths: [1440] })
  })
  it('Should take a snapshot of the terms of use page', () => {
    cy.visit('/terms-of-use')
    cy.wait(WAITING_TIME)
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }))
    cy.wait(WAITING_TIME)
    cy.percySnapshot('terms-of-use', { widths: [1440] })
  })
})
