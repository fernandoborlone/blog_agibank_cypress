/// <reference types="Cypress"/>

const searchTerm = {valid: 'Agibank', invalid: 'InvalidTerm'}
const messageResult = 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.'

describe('Agibank Blog - Search', () => {

  beforeEach(() => {
    cy.intercept('POST', '**/collect').as('postCollect')
    cy.intercept('POST', '**/litespeed-cache/**').as('postLitespeed')
  })

  it('Should find articles when searching by existing term', () => {
    cy.access_agibank_blog_page()
    cy.search_an_article(searchTerm.valid)
    cy.verify_result_content(searchTerm.valid)
  })

  it('Should not find articles when searching by non-existing term', () => {
    cy.access_agibank_blog_page()
    cy.search_an_article(searchTerm.invalid)
    cy.verify_message_result(messageResult)
  })
})