class MainPage {
    getProfile() {
        return cy.get('div.NavigationColumn_container__2fQoD p')
    }
    getSettingBtn() {
        return cy.get('span.MuiIconButton-label')
    }
    getLogoutBtn() {
        return cy.get('div.MyAppSettings_content__3Rb3A h3')
    }
}
export default MainPage;
