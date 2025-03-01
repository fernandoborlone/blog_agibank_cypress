/// <reference types="Cypress"/>

const searchTerm = {
  valid: '19 Mensagens para o Ano Novo 2025 para inspirar Família e Amigos',
  invalid: 'InvalidTerm',
}
const messageResult =
  'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.'

describe('Agibank Blog - Search', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/collect').as('postCollect')
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
