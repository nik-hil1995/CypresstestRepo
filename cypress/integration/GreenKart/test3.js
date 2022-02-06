/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'
describe('handling iframes in cypress', () => {
    it('First test case', () => {
        cy.visit(Cypress.env('BaseUrl') + "/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.wait(2000)
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
        //testing the color of element
        cy.iframe().find('a[class="theme-btn register-btn"]')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(41, 48, 59)')
    })


})
