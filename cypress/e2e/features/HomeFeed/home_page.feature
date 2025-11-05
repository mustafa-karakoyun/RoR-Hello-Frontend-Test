Feature: Home Page
  Scenario: User sees welcome message on home page
    Given user visits the home page
    Then user should see "Hoşgeldiniz" on the page
