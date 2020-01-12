@main-view
Feature: Application main view
  As a user of mobile application
  I can overview and manage main view of application
  So all functionality should work as expected

  Background:
    When I launch application and skip dialog panels
    Then I wait the main view is loaded

  @main-view-overview
  Scenario: Main view overview
    Then elements are visible on current container:
      | itemName              |
      | top toolbar segment   |
      | to-favorite button    |
      | weather info location |
      | to-setting button     |
    And elements are visible on current container:
      | itemName                    |
      | weather info segment        |
      | central weather info square |
      | hourly forecast             |
    And elements are visible on current container:
      | itemName       |
      | alerts segment |
      | alert image    |
      | alert text     |
      | call to action |
    And elements are visible on current container:
      | itemName               |
      | daily forecast segment |