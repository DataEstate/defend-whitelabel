Feature: Navigate to list view

  @i-navigate-to-list-view
  Scenario: I navigate to list view
    Given I navigate to the "Home" screen
    When I choose to go to the "ListView"
    Then I see that I have navigated to the "ListView"
