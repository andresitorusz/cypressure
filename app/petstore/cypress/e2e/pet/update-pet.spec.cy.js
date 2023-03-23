import {
  SUCCESSFUL_UPDATE,
  PET_NAME_UPDATED,
  PET_NOT_FOUND,
  INVALID_ID_SUPPLIED,
  PET_INVALID_ID,
  BASE_URL,
  INPUT_ERROR,
} from "../consts/pet";

describe("PUT /pet API", () => {
  beforeEach(function () {
    // Retrieve body from fixtures based on test case
    cy.fixture("pet/valid-pet").then((body) => {
      this.body = body;
      cy.log("Retrieving valid pet");

      // Create a costume pet that will be updated
      cy.createPet(body);

      switch (Cypress.currentTest.title) {
        case PET_NOT_FOUND:
          // Cleanup the created pet after successfully creating a pet
          cy.deletePetById(this.body.id);
          break;

        case INVALID_ID_SUPPLIED:
          cy.log(`Updating pet id to ${PET_INVALID_ID}`);
          body.id = PET_INVALID_ID;
          break;

        default:
          cy.log(`Updating pet name to ${PET_NAME_UPDATED}`);
          body.name = PET_NAME_UPDATED;
          break;
      }
    });
  });

  afterEach(function () {
    switch (Cypress.currentTest.title) {
      case INVALID_ID_SUPPLIED:
        break;
      case PET_NOT_FOUND:
        break;
      default:
        cy.deletePetById(this.body.id);
        break;
    }
  });

  it(SUCCESSFUL_UPDATE, function () {
    cy.log(`Updating pet to ${JSON.stringify(this.body)}`);
    cy.request({
      method: "PUT",
      url: BASE_URL,
      body: this.body,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal(PET_NAME_UPDATED);
    });
  });

  it(PET_NOT_FOUND, function () {
    cy.log(`Updating pet to ${JSON.stringify(this.body)}`);
    cy.request({
      method: "PUT",
      url: BASE_URL,
      body: this.body,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });

  it(INVALID_ID_SUPPLIED, function () {
    cy.log(`Updating pet to ${JSON.stringify(this.body)}`);
    cy.request({
      method: "PUT",
      url: BASE_URL,
      body: this.body,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.message).to.equal(INPUT_ERROR);
    });
  });
});
