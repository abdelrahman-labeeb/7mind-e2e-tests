import BasePage from "./basePage";

export default class LoginPage extends BasePage {
    visit(): void {
        super.visit("/login");
    }

    getEmailField(): Cypress.Chainable<JQuery> {
        return cy.get("input[name=\"email\"]");
    }

    getPasswordField(): Cypress.Chainable<JQuery> {
        return cy.get("input[name=\"password\"]");
    }

    getLoginWithFacebookLink(): Cypress.Chainable<JQuery> {
        return cy.get("div._2IOFSzflViQ82VSTAnPhuE");
    }

    getLoginSubmitButton(): Cypress.Chainable<JQuery> {
        return cy.get("input[name=\"submit\"]");
    }

    getForgotPasswordLink(): Cypress.Chainable<JQuery> {
        return cy.get("a[class=\"_2OFNsr8gX_ZiFbxUKxVZI3\"]").first();
    }

    getRegistrationLink(): Cypress.Chainable<JQuery> {
        return cy.get("a[class=\"_2OFNsr8gX_ZiFbxUKxVZI3\"]").last();
    }
}