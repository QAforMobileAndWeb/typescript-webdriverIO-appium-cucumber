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
      # --== top bar ==--
      | top toolbar segment   |
      | to-favorite button    |
      | weather info location |
      | to-setting button     |
      # --== weather info segment ==--
      | weather info segment        |
      | central weather info square |
      | hourly forecast             |
      # --== alert ==--
      | alerts segment |
      | alert image    |
      | alert text     |
      | call to action |
      # --== daily forecast segment ==--
      | daily forecast segment |