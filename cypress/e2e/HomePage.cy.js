//const { it } = require("mocha");


describe("Automating Business DashBoard for TM Digital Project", () => {


  it("Business DashBoard Login", () => {
    cy.visit('https://business.dev.task-mo.com/');
    cy.title().should('eq', 'Taskmo Business Admin Dashboard');

    cy.login('admin@taskmo.com', '123456');
    cy.url().should('be.equal', 'https://business.dev.task-mo.com/');
    cy.getCookies().should('have.length', 0)
    cy.clearCookies()
    cy.getCookies().should('be.empty')
  });


  it("Testing Home Page", () => {

    cy.url().should('include', '/dashboard')
      .url().should('eq', 'https://business.dev.task-mo.com/dashboard');
    cy.get('[data-testid="CalendarIcon"]').click(); // click on calendar icon
    cy.get('.MuiMonthPicker-root > .MuiTypography-h5').click(); //click on June month
    cy.get(':nth-child(4) > .PrivatePickersYear-yearButton').click(); //click on 2022
    cy.get(':nth-child(1) > .MuiPaper-root > [style="display: flex; justify-content: space-between;"] > .MuiCardHeader-root > .MuiCardHeader-content > .MuiTypography-root > div')
      .should('have.text', 'Attendance'); //verify Text 
    cy.get(':nth-child(1) > .MuiPaper-root > [style="display: flex; justify-content: space-between;"] > p > :nth-child(1)')
      .should('have.text', "June's Total:   "); //verify Text 
    cy.get(':nth-child(1) > .MuiPaper-root > [style="display: flex; justify-content: space-between;"] > p > :nth-child(2)')
      .should('have.text', 'Grand Total: '); //verify Text 
    cy.scrollTo('bottom'); // scroll to bottom of the page
  });

  it('Business Dashbaord Log out', () => {

    cy.logout()
      .url().should('eq', 'https://business.dev.task-mo.com/');
  });

});

