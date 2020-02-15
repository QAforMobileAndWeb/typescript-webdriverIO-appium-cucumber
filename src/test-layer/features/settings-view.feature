@settings
Feature: Settings
  As a user of mobile application
  I can perform configurations using settings view
  So all functionality should work as expected

  Background:
    When I launch application and skip dialog panels
    Then I wait the main view is loaded
    When I click on 'to-setting button'
    Then I wait the settings view is loaded

  @settings-view-overview
  Scenario: Settings view overview
    Then element 'view title' text should be 'settings_title'
    And element 'sign in description' text should be 'sign_in_description'
    And elements are visible on current container:
      | itemName        |
      | sign in button  |
      | temperature row |
      | wind speed row  |
      | pressure row    |
      | location row    |
