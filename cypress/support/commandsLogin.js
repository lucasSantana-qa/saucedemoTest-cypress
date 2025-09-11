import loc from './locators'

Cypress.Commands.add('login', (username, passwd) => {
    cy.get(loc.LOGIN.USERNAME).type(username)
    cy.get(loc.LOGIN.PASSWD).type(passwd)
    cy.get(loc.LOGIN.BTN_LOGIN).click()
})