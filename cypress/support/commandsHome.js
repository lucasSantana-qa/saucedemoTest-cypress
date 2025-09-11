import loc from '../support/locators'

Cypress.Commands.add('accessSideBar', () => {
  cy.get(loc.HOME.BTN_SIDEBAR).click()
})

Cypress.Commands.add('addToCart', () => {
    cy.get(loc.HOME.BTN_ADD_TO_CART).click()
})

Cypress.Commands.add('accessCart', () => {
    cy.get(loc.HOME.BTN_CART).click()
})