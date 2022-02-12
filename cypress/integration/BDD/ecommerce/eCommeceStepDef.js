import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../support/PageObjects/HomePage'
import ProductPage from '../support/PageObjects/ProductPage'
const homePage = new HomePage()
const productPage = new ProductPage()


Given('I Visit the Website', function () {
    cy.visit(Cypress.env('BaseUrl') + "/angularpractice/")
})

When('Added item to cart', function(){

    homePage.getShopTab().click()
    this.data.productName.forEach(function (element) {
        cy.SelectProduct(element)
    });
    productPage.getCheckout().click()


})

And('validate the total amount', () => {
    var sum = 0
    productPage.getValue().each(($el, index, $list) => {
        var amt = $el.text()
        var res = amt.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)

    }).then(function () {
        cy.log(sum)

    })
    var val = 0
    cy.get('tr td.text-right strong').then(function (element) {
        var total = element.text()
        var value = total.split(" ")
        value = value[1].trim()
        val = Number(val) + Number(value)
        expect(val).to.equals(sum)
    })

})

Then('select the delivery address and validate thankyou message', () => {

    productPage.getCheckoutButton().click()
    productPage.inputCountryName().type('India')
    productPage.waitUntilElementLoad()
    productPage.selectCountry().click()
    productPage.getCheckBoxes().click({ force: true })
    productPage.getPurchaseBtn().click()
    productPage.getSuccessAlert().then(function (element) {
        const message = element.text()
        expect(message.includes('Success')).to.be.true//assertion
    })


})