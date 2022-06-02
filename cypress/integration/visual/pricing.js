const WAITING_TIME = 1000
let scrollToBottom = require('scroll-to-bottomjs')

describe(`Pricing`, () => {
  it('Should take a snapshot of the pricing page', () => {
    cy.visit('/pricing')
    cy.wait(WAITING_TIME)
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }))
    cy.wait(WAITING_TIME)
    cy.percySnapshot('pricing-responsive', { widths: [375, 1024, 1440] })
  })
})
