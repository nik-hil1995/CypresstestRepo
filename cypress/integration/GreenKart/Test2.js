describe('Testing the new window', function () {
    it('First test case', function () {
        cy.visit(Cypress.env("BaseUrl")+"/AutomationPractice/")
        cy.get('#opentab').then(function (el) {
            var value = el.prop('href')
            cy.visit(value)
            
        })
    })
})

   