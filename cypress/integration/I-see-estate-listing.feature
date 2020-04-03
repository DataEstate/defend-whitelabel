Feature: Estate listing responsiveness

  @i-see-estate-listing
  Scenario: I navigate to list view on desktop device
    Given I navigate to the "Home" screen
    When I choose to go to the "ListView"
    Then I see that there are "4" listings on one row on desktop

  @i-see-estate-listing
  Scenario: I navigate to list view on tablet device
    Given I navigate to the "Home" screen
    When I choose to go to the "ListView"
    Then I see that there are "3" listings on one row on tablet

  @i-see-estate-listing
  Scenario: I navigate to list view on mobile device
    Given I navigate to the "Home" screen
    When I choose to go to the "ListView"
    Then I see that there are "1" listings on one row on mobile

  @i-see-estate-listing
  Scenario: I navigate to list view
    Given I navigate to the "Home" screen
    When I choose to go to the "ListView"
    Then I see that there are listings from API