import {
  SUCCESSFUL_FIND,
  BASE_URL,
  PET_NOT_FOUND,
  PET_INVALID_ID,
  INVALID_ID_SUPPLIED,
} from "../consts/pet";

describe("GET /pet/{petId} API", () => {
  beforeEach(function () {
    cy.fixture("pet/valid-pet").then((body) => {
      this.body = body;
      cy.log("Retrieving a valid pet");

      // Create a costume pet that will be used to find by id TC
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
          break;
      }
    });
  });

  it(SUCCESSFUL_FIND, function () {
    cy.log(`Requesting a pet with id ${this.body.id}`);
    cy.request({
      method: "GET",
      url: BASE_URL + "/" + this.body.id,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(this.body.id);
    });
  });

  it(PET_NOT_FOUND, function () {
    cy.log(`Requesting a pet with id ${this.body.id}`);
    cy.request({
      method: "GET",
      url: BASE_URL + "/" + this.body.id,
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
    cy.log(`Requesting a pet with id ${this.body.id}`);
    cy.request({
      method: "GET",
      url: BASE_URL + "/" + this.body.id,
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
