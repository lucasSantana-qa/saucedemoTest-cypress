/// <reference types = "cypress"/>

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import loc from '../../support/locators'  

Given("Im on the login page", () => {
    cy.visit('https://www.saucedemo.com')
})

When("i set invalid credentials", () => {
    cy.login('usuario invalido', 'secret_sauce')
})

Then("the home page should not be visible",() => {
    cy.get(loc.LOGIN.BTN_LOGIN).should('be.visible')
})
  // it('Logout', () => {
  //   cy.get(loc.HOME.BTN_SIDEBAR).click()
  //   cy.get(loc.HOME.BTN_LOGOUT).click()
  //   cy.get(loc.LOGIN.BTN_LOGIN).should('be.visible')
  // })