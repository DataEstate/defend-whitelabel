Feature: Navigate to list view

  @i-navigate-to-list-view
  Scenario: I navigate to list view
    Given I navigate to the "Home" screen
    And I choose to go to "Estates"
    When I choose to go to "List"
    Then I see that I have navigated to the "ListView"
