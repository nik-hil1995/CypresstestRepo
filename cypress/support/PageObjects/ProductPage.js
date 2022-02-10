class ProductPage {
  getCheckout() {
    return cy.get('a.nav-link.btn.btn-primary')
  }
  getCheckoutButton() {
    return cy.get('button.btn.btn-success')
  }
  inputCountryName() {
    return cy.get('#country')
  }
  selectCountry() {
    return cy.get('.suggestions > ul > li > a')
  }
  waitUntilElementLoad() {
    cy.wait(8000)
  }
  getCheckBoxes() {
    return cy.get('#checkbox2')
  }
  getPurchaseBtn() {
    return cy.get('input[type="submit"]')
  }
  getSuccessAlert() {
    return cy.get('.alert');
  }
  getValue(){
    return cy.get('tr td:nth-child(4) strong')
  }

}
export default ProductPage