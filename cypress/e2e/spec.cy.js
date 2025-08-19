/// <reference types = "cypress"/>

import loc from '../support/locators'

describe('Testes funcionais', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.login('standard_user', 'secret_sauce')
    cy.get(loc.HOME.INVENTORY_CONTAINER).should('be.visible')
  })

  it('Logout', () => {
    cy.get(loc.HOME.BTN_SIDEBAR).click()
    cy.get(loc.HOME.BTN_LOGOUT).click()
    cy.get(loc.LOGIN.BTN_LOGIN).should('be.visible')
  })

    it.only('Should buy item', () => {
    cy.xpath(`(${loc.HOME.ITEM_LIST}//div[@data-test='inventory-item-name'])[1]`)
      .invoke('text').then(text => {
        cy.wrap(text).as('itemName')
    })

    cy.xpath(`(${loc.HOME.ITEM_LIST}//div[@data-test="inventory-item-price"])[1]`)
      .invoke('text').then(text => {
        cy.wrap(text).as('itemPrice')
    })

    cy.get(loc.HOME.BTN_ADD_TO_CART).click()
    cy.get(loc.HOME.BTN_REMOVE_ITEM).should('be.visible')
    cy.get(loc.HOME.ICON_QTY_ITEM).should('be.visible')
    cy.get(loc.HOME.BTN_CART).click()
    
    cy.get('@itemName').then(itemName => {
      cy.get(loc.CART.ITEM_NAME)
        .should('have.text', itemName)
    })

    cy.get('@itemPrice').then(itemPrice => {
      cy.get(loc.CART.PRICE)
        .should('have.text', itemPrice)
    })

    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Test')
    cy.get('[data-test="lastName"]').type('Cy')
    cy.get('[data-test="postalCode"]').type('00000-00')
    cy.get('[data-test="continue"]').click()

    cy.get('@itemName').then(itemName => {
      cy.get('[data-test="inventory-item-name"]')        
        .should('have.text', itemName)
    })

    cy.get('@itemPrice').then(itemPrice => {
      cy.get('[data-test="inventory-item-price"]')
        .should('have.text', itemPrice)
    })
  })
})