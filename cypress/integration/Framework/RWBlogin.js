import LoginPage from '../../support/PageObjectsRWB/LoginPage'
import MainPage from '../../support/PageObjectsRWB/MainPage'
//can't declare within the function

describe('Login in RWB', function () {

    let loginPage
    before(function () {
        const loginPage = new LoginPage()
        cy.fixture('RWBdata').then(function (data) {
            this.data = data
        })

    })


    it('Verify the user is able to login and logout', function () {
        const loginPage = new LoginPage()
        const mainPage = new MainPage()

        cy.visit(Cypress.env("StagingRWBurl"))

        loginPage.getEmail().type(this.data.User_email)

        loginPage.getPass().type(this.data.User_pass)
        loginPage.getLoginBtn().click()


        cy.wait(5000)
        cy.url().should('include', '/feed')
        mainPage.getProfile().eq(4).click()
        cy.wait(5000)
        mainPage.getSettingBtn().click()
        cy.wait(5000)
        mainPage.getLogoutBtn().eq(5).click()
        cy.url().should('include', '/login')
    })

})