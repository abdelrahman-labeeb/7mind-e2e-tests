import LoginPage from "../pageObjects/loginPage";
import TimelinePage from "../pageObjects/timelinePage";

const loginPage = new LoginPage();
const timelinePage = new TimelinePage();

describe('Test Login Scenarios', () => {
    beforeEach(() => {
        cy.viewport("iphone-xr");
        loginPage.visit();
    })

    it('validate Login Page elements loaded', () => {
        loginPage.getEmailField()
            .should("be.visible")
            .and("be.empty");
        loginPage.getPasswordField()
            .should("be.visible")
            .and("be.empty");
        loginPage.getLoginWithFacebookLink()
            .should("be.visible");
        loginPage.getLoginSubmitButton()
            .should("be.visible")
            .and("be.enabled"); // Should not be enabled when no input is given
        loginPage.getForgotPasswordLink()
            .should("be.visible");
        loginPage.getRegistrationLink()
            .should("be.visible");
    })

    it('validate successful login', () => {
        loginPage.fillValue(loginPage.getEmailField(), Cypress.env('email'));
        loginPage.fillValue(loginPage.getPasswordField(), Cypress.env('password'));
        loginPage.getLoginSubmitButton().click();
        timelinePage.validateUrlIncludesPath();
        timelinePage.getCoursesElement()
            .should("be.visible");
        timelinePage.getNowElement()
            .should("be.visible");
        timelinePage.getIndividualElement()
            .should("be.visible");
    })

    // Missing proper error message
    it('validate unsuccessful login', () => {
        const LOGIN_REQUEST_URL = "https://api.7mind.de/v1/login";
        cy.intercept("POST", LOGIN_REQUEST_URL).as("matchedUrl");
        loginPage.fillValue(loginPage.getEmailField(), Cypress.env('email'));
        loginPage.fillValue(loginPage.getPasswordField(), "AnyPassWord123?=?");
        loginPage.getLoginSubmitButton().click();
        cy.wait("@matchedUrl")
            .its("response.statusCode")
            .should("eq", 429);
    })
})
