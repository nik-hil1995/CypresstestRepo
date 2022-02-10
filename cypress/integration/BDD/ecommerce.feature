Feature: End to End e-commerce validation

    application regression 

    Scenario: Ecommerce products delivery
    Given I Visit the Website
    When Added item to cart
    And validate the total amount
    Then select the delivery address and validate thankyou message
     