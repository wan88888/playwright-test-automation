Feature: User Login

  Scenario: Successful Login
    Given User is on the login page
    When User enters "standard_user" and "secret_sauce"
    Then User should see the product inventory page
