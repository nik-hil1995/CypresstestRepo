import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../../support/PageObjectsRWB/LoginPage'
import MainPage from '../../../support/PageObjectsRWB/MainPage'

const loginPage = new LoginPage()
const mainPage = new MainPage()

Given('I am opening the url', function () {
    cy.visit(Cypress.env("StagingRWBurl"))
})
When('I entered the credentials and login', function () {
    loginPage.getEmail().type(this.data.User_email)
    loginPage.getPass().type(this.data.User_pass)
    loginPage.getLoginBtn().click()
    
})
Then('I am redirect to feeds Tab', function () {
    cy.url().should('include', '/feed')
    
})
And('After logout i come back to login page', function () {
    mainPage.getProfile().eq(4).click()
    
    mainPage.getSettingBtn().click()
    
    mainPage.getLogoutBtn().eq(5).click()
    cy.url().should('include', '/login')


})