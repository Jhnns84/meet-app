Feature: Specify number of events


  Scenario: When user hasn’t specified a number, 32 is the default number
    Given the user hasn’t specified a number
    When the main page is open
    Then the number of events displayed to the user should be 32

  Scenario: User can change the number of events they want to see
    Given the standard number of events is being shown
    When the user changes the number of events to display
    Then the app should display the number of events set by the user