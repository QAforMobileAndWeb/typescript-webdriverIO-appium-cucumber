@favorites
Feature: Favorites locations
  As a user of mobile application
  I can manage favorites locations
  So all functionality should work as expected

  Background:
    When I launch application and skip dialog panels
    Then I wait the main view is loaded
    When I click on 'to-favorite button'
    Then I wait the favorites view is loaded


  @search-location
  Scenario: Search location
    When I click on 'search button'
    Then elements are visible on current container:
      | itemName      |
      | search input  |
      | search hint   |
    And keyboard should be visible
    And element 'search input text' text should be 'city_or_area'
    And element 'search hint' text should be 'search_hint'
    When I fill 'search input' with 'Barcelona'
    And keyboard should be visible
    Then elements are invisible on current container:
      | itemName      |
      | search button |
      | search hint   |
    Then elements are visible on current container:
      | itemName       |
      | search results |
      | reset button   |
    When I click on 'found item'
    Then keyboard should be invisible
    When I wait the main view is loaded
    Then element with 'Barcelona' text should be visible

    @add-favorite-location
    Scenario: Add favorite location
      Then element 'add favorites description' text should be 'add_favorites_description'
      And 'location cards' elements should be '1'
      When I click on 'search button'
      And I fill 'search input' with 'Barcelona'
      Then elements are visible on current container:
        | itemName       |
        | search results |
      When I click on 'found item'
      When I wait the main view is loaded
      Then element with 'Barcelona' text should be visible
      When I click on 'to-set favoirite button'
      And I click on 'to-favorite button'
      Then I wait the favorites view is loaded
      And elements are invisible on current container:
        | itemName                  |
        | add favorites description |
      And 'location cards' elements should be '2'





