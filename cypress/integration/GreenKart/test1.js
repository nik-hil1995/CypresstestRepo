describe('selecting mouse hover', () => {
    it('mouse hover', () => {
        cy.visit(Cypress.env('BaseUrl') + "/AutomationPractice")
        //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({ force: true })//forcefully click the invisible elements

        cy.url().should('includes', 'top')

    })
})
