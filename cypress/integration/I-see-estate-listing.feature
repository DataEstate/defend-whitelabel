Feature: Navigate to list view

  @i-see-estate-listing
  Scenario: I navigate to list view
    Given I navigate to the "Home" screen
    When I choose to go to the "ListView"
    Then I see the "Estate" Listing is exist
