import {
  SUCCESSFUL_FIND,
  BASE_URL,
  ORDER_ENDPOINT,
  ORDER_INVALID_ID,
  ORDER_NOT_FOUND,
  INVALID_ID_SUPPLIED,
} from "../consts/store";

describe("GET /store/order/{orderId} API", () => {
  beforeEach(function () {
    cy.fixture("store/valid-order").then((body) => {
      this.body = body;
      cy.log("Retrieving a valid order");

      // Create a costume pet that will be used to find by id TC
      cy.createOrder(body);

      switch (Cypress.currentTest.title) {
        case ORDER_NOT_FOUND:
          // Cleanup the created order after successfully creating a pet
          cy.deleteOrderById(this.body.id);
          break;

        case INVALID_ID_SUPPLIED:
          cy.log(`Updating order id to ${ORDER_INVALID_ID}`);
          body.id = ORDER_INVALID_ID;
          break;

        default:
          break;
      }
    });
  });

  it(SUCCESSFUL_FIND, function () {
    cy.log(`Requesting an order with id ${this.body.id}`);
    cy.request({
      method: "GET",
      url: BASE_URL + ORDER_ENDPOINT + "/" + this.body.id,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(this.body.id);
    });
  });

  it(ORDER_NOT_FOUND, function () {
    cy.log(`Requesting an order with id ${this.body.id}`);
    cy.request({
      method: "GET",
      url: BASE_URL + ORDER_ENDPOINT + "/" + this.body.id,
      headers: {
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
      expect(response.body.id).to.equal(undefined);
    });
  });

  it(INVALID_ID_SUPPLIED, function () {
    cy.log(`Requesting an order with id ${this.body.id}`);
    cy.request({
      method: "GET",
      url: BASE_URL + ORDER_ENDPOINT + "/" + this.body.id,
      headers: {
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.id).to.equal(undefined);
    });
  });
});
