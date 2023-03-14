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

const BASE_URL = Cypress.env("BASE_URL") + Cypress.env("PET") + "/";

Cypress.Commands.add("deletePetById", (petId) => {
  cy.log(`Delete a pet with id ${petId}`);

  cy.request({
    method: "DELETE",
    url: BASE_URL + petId,
  });
});

Cypress.Commands.add("createPet", (body) => {
  cy.log(`Create a pet with body: ${JSON.stringify(body)}`);

  cy.request({
    method: "POST",
    url: BASE_URL,
    body: body,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("randomInt", (min, max) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
});
