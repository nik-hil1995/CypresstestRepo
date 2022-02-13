Feature: End to End e-commerce validation

    application regression 

    Scenario: Ecommerce products delivery
    Given I Visit the Website
    When Added item to cart
    And validate the total amount
    Then select the delivery address and validate thankyou message
     
    Scenario: Filling the form
    Given  I Visit the Website
    When I fill the form 
    | name  | gender |
    | nikhil | male  |
    | Rishu  | female |
    Then validate the form behaviour
    And Visit the shop tab
