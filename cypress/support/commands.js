// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

// cypress/support/commands.js
import 'cypress-xpath';
//import 'cypress-file-upload'


import testData from "../fixtures/salesforceTestData.json";


Cypress.Commands.add("navigateAndLoginSalesforce", (username, password) => {
  const requestBody = testData.requestBodyForSalesforceLogin;
  requestBody.un=username;
  requestBody.pw=password;
  cy.session("SalesforceLogin", () => {
    cy.request({

      body: requestBody,
      form: true,
      method: "POST",
      url: "https://login.salesforce.com/",
    });
  });

  cy.visit("Paste your Org url here...............");
});





