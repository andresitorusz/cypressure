import {
  FIND_BY_STATUS_ENDPOINT,
  SUCCESSFUL_FIND,
  BASE_URL,
  PET_STATUS,
  INVALID_STATUS_VALUE,
} from "../consts/pet";

describe("GET /pet/findByStatus API", () => {
  it(SUCCESSFUL_FIND, function () {
    // Iterate over array valid pet status and hit findByStatus API
    cy.wrap(PET_STATUS).each((petStatus) => {
      cy.log(`Requesting pet with status: ${petStatus}`);
      cy.request({
        method: "GET",
        url: BASE_URL + FIND_BY_STATUS_ENDPOINT,
        qs: {
          status: petStatus,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        var petList = response.body;

        // Iterate over response body and check if the pet status is suitable
        petList.forEach((pet) => {
          expect(pet.status).to.equal(petStatus);
        });

        expect(response.status).to.equal(200);
      });
    });
  });

  it(INVALID_STATUS_VALUE, function () {
    cy.log(`Requesting pet with status: ${INVALID_STATUS_VALUE}`);
    cy.request({
      method: "GET",
      url: BASE_URL + FIND_BY_STATUS_ENDPOINT,
      qs: {
        status: INVALID_STATUS_VALUE,
      },
      headers: {
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
