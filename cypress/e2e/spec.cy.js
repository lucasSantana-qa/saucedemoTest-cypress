/// <reference types = "cypress"/>

import loc from '../support/locators'

describe('Functional tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.login('standard_user', 'secret_sauce')
    cy.get(loc.HOME.INVENTORY_CONTAINER).should('be.visible')
    cy.get(loc.HOME.BTN_SIDEBAR).click()
    cy.get('[data-test="reset-sidebar-link"]').click()
    cy.get('.bm-cross-button').click()
  })

  it('Logout', () => {
    cy.get(loc.HOME.BTN_SIDEBAR).click()
    cy.get(loc.HOME.BTN_LOGOUT).click()
    cy.get(loc.LOGIN.BTN_LOGIN).should('be.visible')
  })

    it('Should buy item', () => {
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

    cy.get(loc.CHECKOUT_INFO.CHECKOUT_PAGE).click()
    cy.get(loc.CHECKOUT_INFO.FIRST_NAME).type('Test')
    cy.get(loc.CHECKOUT_INFO.LAST_NAME).type('Cy')
    cy.get(loc.CHECKOUT_INFO.POSTAL_CODE).type('00000-00')
    cy.get(loc.CHECKOUT_INFO.BTN_CONTINUE).click()

    cy.get('@itemName').then(itemName => {
      cy.get(loc.CHECKOUT_OVERVIEW.ITEM_NAME)        
        .should('have.text', itemName)
    })

    cy.get('@itemPrice').then(itemPrice => {
      cy.get(loc.CHECKOUT_OVERVIEW.ITEM_PRICE)
        .should('have.text', itemPrice)
      cy.get(loc.CHECKOUT_OVERVIEW.SUB_TOTAL)
        .should('have.text', `Item total: ${itemPrice}`)
    })

    cy.get(loc.CHECKOUT_OVERVIEW.PRICE_TOTAL)
      .should('have.text', 'Total: $32.39')

    cy.get(loc.CHECKOUT_OVERVIEW.BTN_FINISH).click()
    cy.get(loc.CHECKOUT_COMPLETE.DONE_ICON).should('exist')
      .and('be.visible')
    
    cy.get(loc.CHECKOUT_COMPLETE.THNKS_TXT)
      .should('have.text', 'Thank you for your order!')
    cy.get(loc.CHECKOUT_COMPLETE.COMPLETE_TXT)
      .should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
  })
})