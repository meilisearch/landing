const WAITING_TIME = 1000
let scrollToBottom = require('scroll-to-bottomjs')

describe(`Pricing`, () => {
  it('Should take a snapshot of the pricing page', () => {
    cy.visit('/')
    cy.wait(WAITING_TIME)
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow =>
      scrollToBottom({ remoteWindow: cyWindow, frequency: 80, timing: 10 })
    )
    cy.wait(WAITING_TIME)
    cy.percySnapshot('pricing-responsive')
  })
})
