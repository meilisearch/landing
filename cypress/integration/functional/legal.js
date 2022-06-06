describe(`Legal`, () => {
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
