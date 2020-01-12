@launch-app
Feature: Launch application
  As a user of mobile application
  I can overview and manage main view of application
  So all functionality should work as expected

  # for only-api-29
  @launch-app-overview
  Scenario: Launch application overview
    Then the 'location alert' should be visible within dialog panel
    And elements are visible on current container:
      | itemName         |
      | location message |
      | continue button  |
    And element 'location message' text should be 'app_needs_to_know_location'
    When I click on 'continue button'
    Then the 'permissions container' should be visible within dialog panel
    And elements are visible on current container:
      | itemName                |
      | permission icon         |
      | permission message      |
      | allow always button     |
      | allow foreground button |
      | deny button             |
    And element 'permission message' text should be 'allow_app_to_access_location'
    And element 'allow always button' text should be 'allow_all_time'
    And element 'allow foreground button' text should be 'allow_only_during_app_using'
    And element 'deny button' text should be 'deny'
    When I click on 'deny button'
    Then the 'permissions container' should be invisible within dialog panel
    And I wait the main view is loaded