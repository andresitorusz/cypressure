import {
  SUCCESSFUL_CREATE,
  BAD_REQUEST,
  BASE_URL,
  INPUT_ERROR,
} from "../consts/pet";

describe("POST /pet API", () => {
  beforeEach(function () {
    switch (Cypress.currentTest.title) {
      case BAD_REQUEST:
        cy.log("Retrieve invalid pet");
        cy.fixture("pet/invalid-pet").then((body) => {
          this.body = body;
          cy.log(`Body: ${JSON.stringify(body)}`);
        });
        break;

      case SUCCESSFUL_CREATE:
        cy.log("Retrieve valid pet");
        cy.fixture("pet/valid-pet").then((body) => {
          this.body = body;
          cy.log(`Body: ${JSON.stringify(body)}`);
        });
        break;

      default:
        break;
    }
  });

  afterEach(function () {
    switch (Cypress.currentTest.title) {
      case BAD_REQUEST:
        break;

      case SUCCESSFUL_CREATE:
        // Cleanup the created pet after successfully creating a pet
        cy.deletePetById(this.body.id);
        break;

      default:
        break;
    }
  });

  it(SUCCESSFUL_CREATE, function () {
    cy.request({
      method: "POST",
      url: BASE_URL,
      body: this.body,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it(BAD_REQUEST, function () {
    cy.request({
      method: "POST",
      url: BASE_URL,
      body: this.body,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.message).to.equal(INPUT_ERROR);
    });
  });
});
