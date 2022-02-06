
class HomePage {
  getName() {
    return cy.get('input[name="name"]:nth-child(2)')
  }
  getDataBinding() {
    return cy.get('input[name="name"]:nth-child(1)')
  }
  getGender() {
    return cy.get('select')
  }
  getShopTab() {
    return cy.get(':nth-child(2) > .nav-link')
  }
  getEnterprenueRadioButton() {
    return cy.get('#inlineRadio3')
  }
  getEmail() {
    return cy.get('input[name="email"]')
  }
  getPass() {
    return cy.get('input[type="password"]')
  }

  getCheckmeOutCheckbox() {
    return cy.get('input[value="option1"]')
  }
  getstudentsRadioBtn() {
    return cy.contains('Student')

  }
}
export default HomePage;