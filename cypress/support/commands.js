
Cypress.Commands.add("login", (username, password) => {
  //adding a new command named login
  cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').clear()
    .should('be.visible');
  cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)')
    .should('not.be.disabled')
    .type(username);
  cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').clear();
  cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)')
    .should('not.be.disabled')
    .type(password);
  cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4)')
    .should('be.visible')
    .should('have.text', 'Login')
    .click();
});


Cypress.Commands.add("logout", () => {
  cy.get(".MuiList-root > :nth-child(14)")
    .should('be.visible')
    .should('have.text', ' Logout ')
    .click();
  cy.get('.MuiDialogActions-root > :nth-child(2)')
    .should('be.visible')
    .should('have.text', 'Ok')
    .click();



});