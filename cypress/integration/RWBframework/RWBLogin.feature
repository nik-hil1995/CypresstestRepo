Feature: RWB login validation

    End to End test for RWB 
    Scenario: Validate that user login and login successfully
    Given I am opening the url
    When I entered the credentials and login
    Then  I am redirect to feeds Tab    
    And After logout i come back to login page