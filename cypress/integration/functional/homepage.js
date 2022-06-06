describe(`Homepage`, () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should visit the home page', () => {
    cy.url().should('match', new RegExp(Cypress.config('baseUrl')))
  })

  it('Should have blocks', () => {
    cy.get('.header').should('be.visible')
    cy.get('.hero').should('be.visible')
    cy.get('.demo').should('be.visible')
    cy.get('.openSource').should('be.visible')
    cy.get('.step1').should('be.visible')
    cy.get('.step2').should('be.visible')
    cy.get('.step3').should('be.visible')
    cy.get('.developer').should('be.visible')
    cy.get('.cards').should('be.visible')
    cy.get('.testimonials').should('be.visible')
    cy.get('.footer').should('be.visible')
  })

  it('Should display movies in the interactive search', () => {
    // Search for first only because 2 interactive search are displayed
    // One for mobile & one for desktop
    cy.get('.ais-Hits-list').first().children().should('have.length', 4)
  })
})
