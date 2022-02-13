describe('Login in RWB',function(){

    before(function(){
     cy.fixture('RWBdata').then(function(data){
         this.data=data
     })

    })
it('Verify the user login and logout',function(){
cy.visit(Cypress.env("StagingRWBurl"))
cy.get("input[type='text']").type(this.data.User_email)
cy.get("input[type='password']").type(this.data.User_pass)
cy.contains('Log In').click()
cy.wait(5000)
cy.url().should('include','/feed')
cy.get('div.NavigationColumn_container__2fQoD p').eq(4).click()
cy.wait(5000)
cy.get('span.MuiIconButton-label').click()
cy.wait(5000)
cy.get('div.MyAppSettings_content__3Rb3A h3').eq(5).click()
cy.url().should('include', '/login')
})

})