Feature: Login

Background: Navigation to the website
    Given Im on the login page
Scenario: Try login with invalid credentials
    When i set invalid credentials
    Then the home page should not be visible