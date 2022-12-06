describe(`Functional tests`, () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://api.github.com/repos/meilisearch/meilisearch',
      {
        statusCode: 201,
      }
    )
  })

  context('home page', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Should visit the home page', () => {
      cy.url().should('match', new RegExp(Cypress.config('baseUrl')))
    })

    it('Should have blocks', () => {
      cy.get('[data-cy="header"]').should('be.visible')
      cy.get('[data-cy="hero"]').should('be.visible')
      cy.get('[data-cy="companies"]').should('be.visible')
      cy.get('[data-cy="demo"]').should('be.visible')
      cy.get('[data-cy="openSource"]').should('be.visible')
      cy.get('[data-cy="step1"]').should('be.visible')
      cy.get('[data-cy="step2"]').should('be.visible')
      cy.get('[data-cy="step3"]').should('be.visible')
      cy.get('[data-cy="developer"]').should('be.visible')
      cy.get('[data-cy="cards"]').should('be.visible')
      cy.get('[data-cy="testimonials"]').should('be.visible')
      cy.get('[data-cy="footer"]').should('be.visible')
    })

    it('Should display movies in the interactive search', () => {
      cy.get('[data-cy="interactive-search-desktop"] .ais-Hits-list')
        .children()
        .should('have.length', 4)
    })
  })

  context('pricing page', () => {
    beforeEach(() => {
      cy.visit('/pricing')
    })

    it('Should visit the pricing page', () => {
      cy.url().should(
        'match',
        new RegExp(`${Cypress.config('baseUrl')}/pricing`)
      )
    })

    it('Should have blocks', () => {
      cy.get('[data-cy="header"]').should('be.visible')
      cy.get('[data-cy="pricingHero"]').should('be.visible')
      cy.get('[data-cy="pricingCards"]').should('be.visible')
      cy.get('[data-cy="pricingTable"]').should('be.visible')
      cy.get('[data-cy="pricingAssistant"]').should('be.visible')
      cy.get('[data-cy="pricingFaq"]').should('be.visible')
      cy.get('[data-cy="footer"]').should('be.visible')
    })

    it('Should have working accordions in the faq section', () => {
      cy.get('details').eq(1).as('accordion')
      cy.get('@accordion').should('not.have.attr', 'open')
      cy.get('@accordion').click({ scrollBehavior: 'center' })
      cy.get('@accordion').should('have.attr', 'open')
    })
  })

  context('legal pages', () => {
    it('Should visit the privacy policy page', () => {
      cy.visit('/privacy-policy')
      cy.url().should(
        'match',
        new RegExp(`${Cypress.config('baseUrl')}/privacy-policy`)
      )
      cy.contains('Privacy Policy')
    })

    it('Should visit the terms of use page', () => {
      cy.visit('/terms-of-use')
      cy.url().should(
        'match',
        new RegExp(`${Cypress.config('baseUrl')}/terms-of-use`)
      )
      cy.contains('General Terms and Conditions of Use and Sale')
    })
  })

  context('404 page', () => {
    beforeEach(() => {
      cy.visit('/test', { failOnStatusCode: false })
    })
    it('Should visit the 404 page', () => {
      cy.url().should('match', new RegExp(`${Cypress.config('baseUrl')}/test`))
      cy.contains('Sorry, the page you are looking for does not exist.')
    })

    it('Should have a link bringing to home page', () => {
      cy.get('[data-cy="bring-me-home"]').click()
      cy.url().should('match', new RegExp(Cypress.config('baseUrl')))
    })
  })

  context('about us page', () => {
    beforeEach(() => {
      cy.visit('/about-us')
    })

    it('Should visit the about us page', () => {
      cy.url().should(
        'match',
        new RegExp(`${Cypress.config('baseUrl')}/about-us`)
      )
    })

    it('Should have blocks', () => {
      cy.get('[data-cy="AboutUsHero"]').should('be.visible')
      cy.get('[data-cy="ourTeam"]').should('be.visible')
      cy.get('[data-cy="ourStory"]').should('be.visible')
      cy.get('[data-cy="values"]').should('be.visible')
      cy.get('[data-cy="perksAndBenefits"]').should('be.visible')
      cy.get('[data-cy="investors"]').should('be.visible')
      cy.get('[data-cy="jobOffers"]').should('be.visible')
    })
  })
})
