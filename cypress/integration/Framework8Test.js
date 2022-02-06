/// <reference types="Cypress" />

import HomePage from '../support/PageObjects/HomePage'
import ProductPage from '../support/PageObjects/ProductPage'
describe('Framework part', () => {
    const homePage = new HomePage()
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it('First test case', function () {

        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit(Cypress.env('BaseUrl') + "/angularpractice/")

        homePage.getName().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        //few asserstion
        homePage.getDataBinding().should('have.value', this.data.name)
        //validation for min length
        homePage.getName().should('have.attr', 'minlength', 2)
        //radio button is disabled or not
        homePage.getEnterprenueRadioButton().should('be.disabled')
        //to pause the test 

        homePage.getShopTab().click()

        this.data.productName.forEach(function (element) {
            cy.SelectProduct(element)
        });
        productPage.getCheckout().click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
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
 
})