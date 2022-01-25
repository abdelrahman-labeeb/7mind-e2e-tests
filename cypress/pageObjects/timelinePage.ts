import BasePage from "./basePage";

export default class TimelinePage extends BasePage {
    visit(): void {
        super.visit("/timeline");
    }

    validateUrlIncludesPath() {
        super.validateUrlIncludesPath("/timeline");
    }

    getCoursesElement(): Cypress.Chainable<JQuery> {
        return cy.get("div[class=\"_32PUO-pys2Hs0iVUstGsUN\"]");
    }

    getNowElement(): Cypress.Chainable<JQuery> {
        return cy.get("div[class=\"_32PUO-pys2Hs0iVUstGsUN\"]");
    }

    getIndividualElement(): Cypress.Chainable<JQuery> {
        return cy.get("div[class=\"_32PUO-pys2Hs0iVUstGsUN\"]");
    }
}