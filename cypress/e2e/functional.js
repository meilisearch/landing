describe(`Functional tests`, () => {
  context('home page', () => {
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
    it('Should visit the 404 page', () => {
      cy.visit('/test', { failOnStatusCode: false })
      cy.url().should('match', new RegExp(`${Cypress.config('baseUrl')}/test`))
      cy.contains('Sorry, the page you are looking for does not exist.')
    })

    it('Should have a link bringing to home page', () => {
      cy.get('a > span').contains('Bring me home, please').click()
      cy.url().should('match', new RegExp(Cypress.config('baseUrl')))
    })
  })
})
