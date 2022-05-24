const WAITING_TIME = 5000

describe(`Homepage`, () => {
  it('Should visit the Home page', () => {
    cy.visit('/')
    cy.wait(WAITING_TIME)
    cy.url().should('match', new RegExp(Cypress.config('baseUrl')))
  })

  context('Should have blocks', () => {
    it('Should have an hero block', () => {
      cy.get('.hero').should('be.visible')
    })
    it('Should have a demo block', () => {
      cy.get('.demo').should('be.visible')
    })
    it('Should have an openSource block', () => {
      cy.get('.openSource').should('be.visible')
    })
    it('Should have a step1 block', () => {
      cy.get('.step1').should('be.visible')
    })
    it('Should have a step2 block', () => {
      cy.get('.step2').should('be.visible')
    })
    it('Should have a step3 block', () => {
      cy.get('.step3').should('be.visible')
    })
    it('Should have a developer block', () => {
      cy.get('.developer').should('be.visible')
    })
    it('Should have a cards block', () => {
      cy.get('.cards').should('be.visible')
    })
    it('Should have a testimonials block', () => {
      cy.get('.testimonials').should('be.visible')
    })
  })
  it('Should display movies in the interactive search', () => {
    // Search for first only because 2 interactive search are displayed
    // One for mobile & one for desktop
    cy.get('.ais-Hits-list').first().children().should('have.length', 4)
  })
})
