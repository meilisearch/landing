const WAITING_TIME = 1000

describe(`Pricing`, () => {
  beforeEach(() => {
    cy.visit('/pricing')
    cy.wait(WAITING_TIME)
  })

  it('Should visit the pricing page', () => {
    cy.url().should('match', new RegExp(`${Cypress.config('baseUrl')}/pricing`))
  })

  it('Should have blocks', () => {
    cy.get('.header').should('be.visible')
    cy.get('.pricingHero').should('be.visible')
    cy.get('.pricingCards').should('be.visible')
    cy.get('.pricingTable').should('be.visible')
    cy.get('.pricingFaq').should('be.visible')
    cy.get('.footer').should('be.visible')
  })

  it('Should have working accordions in the faq section', () => {
    cy.get('details').eq(1).as('accordion')
    cy.get('@accordion').should('not.have.attr', 'open')
    cy.get('@accordion').click({ scrollBehavior: 'center' })
    cy.get('@accordion').should('have.attr', 'open')
  })
})
