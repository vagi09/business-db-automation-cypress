describe("Testing Comapny Tab", () => {

  let add;

  before(function () {
    //access fixture data
    cy.fixture('AddNewCompany').then(function (regdata) {
      add = regdata;

    });

  });

  beforeEach("Business DashBoard Login", () => {
    cy.visit('https://business.dev.task-mo.com/');
    cy.login('admin@taskmo.com', '123456');

  });


  it("Testing Comapny Tab Text Elements", () => {

    cy.get(':nth-child(2) > a > .MuiListItemIcon-root').click();
    cy.wait(5000);
    cy.url().should('eq', 'https://business.dev.task-mo.com/company');
    cy.contains('Total Number of Companies').should('have.text', ' Total Number of Companies ');
    cy.contains(' Total Number of Active Companies ').should('have.text', ' Total Number of Active Companies ');
    cy.contains(' Total Number of Non Active Companies ').should('have.text', ' Total Number of Non Active Companies ');
    cy.contains('Active Company ').should('have.text', 'Active Company ');
    cy.contains('Non Active Company ').should('have.text', 'Non Active Company ');
    cy.contains('Pending Company ').should('have.text', 'Pending Company ');
    cy.contains('Add Company').should('have.text', 'Add Company');

    //.should('not.have.button', 'disabled');
  });


  it.only("Adding New Comapnay", () => {

    cy.get(':nth-child(2) > a > .MuiListItemIcon-root')
      .wait(4000)
      .click();
    cy.contains('Add Company')
      .click().url().should('eq', 'https://business.dev.task-mo.com/add-company');


    cy.get('#demo-simple-select').click();
    cy.contains('Proprietorship').click();
    cy.get('#outlined-basic').type(add.GST);
    cy.contains('Check').click();

    cy.get("input[name='company_name']").type(add.companyName);
    cy.get("input[name='company_brand_name']").type(add.BrandName);
    cy.get(':nth-child(3) > :nth-child(1) > [style="min-width: 100%;"] > .MuiInputBase-root > #outlined-basic').click();
    cy.contains('Insure Tech').click();

    cy.get("input[name='founder_name']").type(add.founder_name, { force: true });
    cy.get("input[name='founder_email']").type(add.founder_email);
    cy.get("textarea[name='about_company']").type(add.about_company);
    cy.get("input[name='company_pincode']").type(add.PIN_code);
    cy.get("textarea[name='company_address']").type(add.company_address);
    cy.get(':nth-child(2) > [style="min-width: 100%;"] > .MuiInputBase-root > #outlined-basic').click();
    cy.get('#menu-country > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root')
      .click();
    cy.get("div[class='MuiGrid-root MuiGrid-item MuiGrid-justify-content-xs-flex-end MuiGrid-grid-xs-12'] button[type='submit']").click()
      .should('be.visible');
    cy.get(':nth-child(2) > a > .MuiListItemIcon-root').click();





  })


  // it('Business Dashboard logout', () => {

  //   cy.logout();

  // });





})