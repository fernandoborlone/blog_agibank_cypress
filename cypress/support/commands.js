import locators from '../support/GUI/locators/locators'

Cypress.Commands.add('access_agibank_blog_page', () => {
  cy.visit('/institucional')
  cy.wait_page_render('@postCollect')
  cy.get(locators.HEADER_MENU).should('be.visible')
})

Cypress.Commands.add('search_an_article', (searchTerm) => {
  cy.get(locators.SEARCH_BUTTON).click()
  cy.get(locators.SEARCH_FIELD).type(`${searchTerm}{enter}`)
})

Cypress.Commands.add('wait_page_render', (aliases) => {
  cy.wait(aliases)
})

Cypress.Commands.add('verify_result_content', (searchTerm) => {
  cy.wait_page_render('@postCollect')
  cy.contains(locators.SEARCH_RESULTS, 'Agibank').should('exist')
  cy.get(locators.SEARCH_RESULTS_CONTENT).first().click()
  cy.contains('#content', searchTerm)
})

Cypress.Commands.add('verify_message_result', (messageResult) => {
  cy.wait_page_render('@postCollect')
  cy.get(locators.PAGE_CONTENT).should('contain', messageResult)
})
