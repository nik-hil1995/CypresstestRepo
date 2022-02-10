import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../support/PageObjects/HomePage'
import ProductPage from '../support/PageObjects/ProductPage'
const homePage = new HomePage()
const productPage = new ProductPage()


Given('I Visit the Website', function () {
    cy.visit(Cypress.env('BaseUrl') + "/angularpractice/")
})

When('Added item to cart', () => {

    homePage.getShopTab().click()
    this.data.productName.forEach(function (element) {
        cy.SelectProduct(element)
    });
    productPage.getCheckout().click()


})

And('validate the total amount',()=>{

    
})