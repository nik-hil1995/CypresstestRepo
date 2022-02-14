class LoginPage {

    getEmail() {
        return cy.get("input[type='text']")
    }
    getPass() {
        return cy.get("input[type='password']")   
    }
    getLoginBtn(){
        return cy.contains('Log In')
    }

}
export default LoginPage;