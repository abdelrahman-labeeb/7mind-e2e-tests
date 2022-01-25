export default class BasePage {
    visit(path: string): void {
        cy.visit(path);
        cy.url().should("include", Cypress.config().baseUrl);
        cy.location("pathname").should("eq", path);
    }

    validateUrlIncludesPath(expectedPath: string): void {
        cy.url().should("include", Cypress.config().baseUrl);
        cy.location("pathname").should("eq", expectedPath);
    }

    fillValue(element: Cypress.Chainable<JQuery>, value: string): void {
        element.clear().type(value).should("have.value", value);
    }
}