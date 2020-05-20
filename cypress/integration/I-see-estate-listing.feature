Feature: Estate listing responsiveness

  @i-see-estate-listing
  Scenario: I navigate to list view on desktop device
    Given I navigate to the "Home" screen
    And I choose to go to "Estates"
    When I choose to go to "List"
    Then I see that there are "4" listings on one row on desktop

  @i-see-estate-listing
  Scenario: I navigate to list view on tablet device
    Given I navigate to the "Home" screen
    And I choose to go to "Estates"
    When I choose to go to "List"
    Then I see that there are "2" listings on one row on tablet

  @i-see-estate-listing
  Scenario: I navigate to list view on mobile device
    Given I navigate to the "Home" screen
    And I choose to go to "Estates"
    When I choose to go to "List"
    Then I see that there are "1" listings on one row on mobile

  @i-see-estate-listing
  Scenario: I navigate to list view
    Given I navigate to the "Home" screen
    And I choose to go to "Estates"
    When I choose to go to "List"
    Then I see that there are listings from API

  @i-see-estate-listing
  Scenario: I navigate to list view with query parameters
    Given I navigate to the "Home" screen
    And I choose to go to "Estates"
    When I choose to go to "List" screen with query parameters "size=5&state=NSW"
    Then I see that there are "12" listings from API

  @i-see-estate-listing
  Scenario: I navigate to list view without filter selected
    Given I navigate to the "List" screen
    And I choose to go to "Estates"
    When I choose to go to "List"
    Then I see filter with default placeholder text "Any categories" and there are selected data with these categories "ACCOMM,ATTRACTION,TOUR,EVENT,RESTAURANT" from API

  @i-see-estate-listing
  Scenario: I navigate to list view with one filter selected
    Given I navigate to the "List" screen
    And I choose to go to "Estates"
    When I choose to go to "List"
    Then I select filter "Accommodation" and I see text "Accommodation" and there are selected data with these categories "ACCOMM" from API
      
  @i-see-estate-listing
  Scenario: I navigate to list view with multiple filter selected
    Given I navigate to the "List" screen
    And I choose to go to "Estates"
    When I choose to go to "List"
    Then I select filter "Accommodation,Tour" and I see text "Categories - 2" and there are selected data with these categories "ACCOMM,TOUR" from API