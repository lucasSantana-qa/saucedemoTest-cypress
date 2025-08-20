Feature: Shopping

Background: Navigation to the website
    Given im logged in
Scenario: Buy item
    When an item is added to the cart
    And put checkout informations
    Then the purchase is done with success