Feature: Show/Hide an events details


  Scenario: An event element is collapsed by default
    Given the app is open
    When the user hasn’t expanded an event
    Then the event elements should all be collapsed

  Scenario: User can expand an event to see its details
    Given the list of events has been loaded
    When the user taps on “show details”
    Then the respective event element should expand

  Scenario: User can collapse an event to hide its details
    Given an events details are expanded
    When the user taps on show/hide details
    Then the respective event element should collapse