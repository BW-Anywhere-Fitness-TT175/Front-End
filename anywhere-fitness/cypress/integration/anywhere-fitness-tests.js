// anywhere-fitness-tests.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Integration Tests-Visit site', function () {
  it('Visits a site', function () {
    cy.visit('localhost:3000/');
  });
});

describe('Integration Test- Click Sign Up Link and open registration form', function () {
  it('Clicks link for signing up and opens registration form', function () {
    cy.visit('localhost:3000/');
    cy.get('[data-cy=login]').click();
  });
});

describe('Integration Test-Open Log In Form', function () {
  it('Clicks the Log In link and opens the login page', function () {
    cy.visit('localhost:3000/');
    cy.get('[data-cy=registerLink]').click();
  });
});

describe('Integration Test-form input', function () {
  it('Opens registration form and adds data', function () {
    cy.visit('localhost:3000/');
    cy.get('[data-cy=registerLink]').click();
    cy.get('[data-cy=first_name]').
  });
});
