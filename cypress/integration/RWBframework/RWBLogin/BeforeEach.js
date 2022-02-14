beforeEach(function () {
    Cypress.config('pageLoadTimeout', 100000)
    cy.fixture('RWBdata').then(function (data) {
        this.data = data
        
    })

})
    