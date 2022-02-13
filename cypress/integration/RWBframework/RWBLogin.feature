Feature: RWB login validation

    End to End test for RWB 
    Scenario: Validate that user login and login successfully
    Given I am opening the url
    When I enter the credentials and login
    Then User is redirected to feeds Tab    
    And After logout user come back to login page 