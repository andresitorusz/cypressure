import {
  BASE_URL,
  SUCCESSFUL_CREATE,
  ORDER_ENDPOINT,
  INPUT_ERROR,
  BAD_REQUEST,
} from "../consts/store";

describe("POST /store/order API", () => {
  beforeEach(function () {
    switch (Cypress.currentTest.title) {
      case BAD_REQUEST:
        cy.log("Retrieving invalid order");
        cy.fixture("store/invalid-order").then((body) => {
          this.body = body;
          cy.log(`Body: ${JSON.stringify(body)}`);
        });
        break;

      case SUCCESSFUL_CREATE:
        cy.log("Retrieving valid order");
        cy.fixture("store/valid-order").then((body) => {
          this.body = body;
          cy.log(`Body: ${JSON.stringify(body)}`);
        });
        break;

      default:
        break;
    }
  });

  it(SUCCESSFUL_CREATE, function () {
    cy.log(`Creating an order with body ${JSON.stringify(this.body)}`);
    cy.request({
      method: "POST",
      url: BASE_URL + ORDER_ENDPOINT,
      body: this.body,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(this.body.id);
      expect(response.body.petId).to.equal(this.body.petId);
      expect(response.body.quantity).to.equal(this.body.quantity);
    });
  });

  it(BAD_REQUEST, function () {
    cy.log(`Creating an order with body ${JSON.stringify(this.body)}`);
    cy.request({
      method: "POST",
      url: BASE_URL + ORDER_ENDPOINT,
      body: this.body,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.message).to.equal(INPUT_ERROR);
    });
  });
});
