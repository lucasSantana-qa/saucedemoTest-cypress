/// <reference types = "cypress"/>

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import loc from '../../support/locators' 
import '../../support/commandsLogin.js'

Given("Im on the login page", () => {
    cy.visitPage()
})

When("i set invalid credentials", () => {
    cy.login('usuario invalido', 'secret_sauce')
})

Then("the home page should not be visible",() => {
    cy.get(loc.LOGIN.BTN_LOGIN).should('be.visible')
})