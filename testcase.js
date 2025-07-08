// Manual Selenium test script
describe('Login Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/secure')
  })
  
  it('should fail with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('invalid')
    cy.get('#password').type('invalid')
    cy.get('button[type="submit"]').click()
    cy.get('.flash.error').should('be.visible')
  })
})