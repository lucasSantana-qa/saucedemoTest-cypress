Feature: Login

Background: Navigation to the website
    Given Im on the login page
Scenario: Try login with invalid credentials
    When i set invalid credentials
    Then a message should be visible showing that the credentials are invalid