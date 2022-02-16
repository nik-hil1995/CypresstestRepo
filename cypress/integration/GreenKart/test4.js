/// <reference types="cypress"/>
describe('right click and it check', function(){
it('check common things', ()=>{
cy.visit('https://rahulshettyacademy.com/angularpractice/')
cy.title().its('length').should('eq',13).and('include','ProtoCommerce')
})

})
