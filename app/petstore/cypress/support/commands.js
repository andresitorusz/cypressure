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

const BASE_URL = Cypress.env("BASE_URL");
const PET_ENDPOINT = Cypress.env("PET") + "/";
const ORDER_ENDPOINT = Cypress.env("STORE") + Cypress.env("ORDER") + "/";

Cypress.Commands.add("createPet", (body) => {
  cy.log(`Creating a pet with body: ${JSON.stringify(body)}`);

  cy.request({
    method: "POST",
    url: BASE_URL + PET_ENDPOINT,
    body: body,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("deletePetById", (petId) => {
  cy.log(`Deleting a pet with id ${petId}`);

  cy.request({
    method: "DELETE",
    url: BASE_URL + PET_ENDPOINT + petId,
  });
});

Cypress.Commands.add("createOrder", (body) => {
  cy.log(`Creating an order with body: ${JSON.stringify(body)}`);

  cy.request({
    method: "POST",
    url: BASE_URL + ORDER_ENDPOINT,
    body: body,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("deleteOrderById", (orderId) => {
  cy.log(`Deleting an order with body: ${JSON.stringify(orderId)}`);

  cy.request({
    method: "DELETE",
    url: BASE_URL + ORDER_ENDPOINT + orderId,
  });
});
