/// <reference types="cypress" />

context('Sample', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9009/?path=/story/sample--sample')
  })

  it('sample', () => {
    cy.get('iframe#storybook-preview-iframe')
      .its('0.contentDocument')
      .its('body')
      .find('.for-cypress-check')
      .should('have.text', 'Cypress is good!!')
  })
})
