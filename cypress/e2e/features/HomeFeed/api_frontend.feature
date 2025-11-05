Feature: API Frontend Integration

  Scenario: List all users
    Given user visits the users page
    Then user should see the list of users

  Scenario: Create a new post successfully
    Given user visits the new post page
    When user fills the form with valid data and submits
    Then user should see a success message

  Scenario: Fetch non-existent user
    Given user visits the user detail page for id 99999
    Then user should see a not found error

  Scenario: Create post with missing title
    Given user visits the new post page
    When user submits the form with missing title
    Then user should see a validation error for title
