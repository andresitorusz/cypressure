import {
  BASE_URL,
  SUCCESSFUL_FIND,
  INVENTORY_ENDPOINT,
  INVENTORY_SCHEMA,
} from "../consts/store";

describe("GET /store/inventory API", () => {
  it(SUCCESSFUL_FIND, function () {
    cy.log(`Requesting pet inventories by status`);
    cy.request({
      method: "GET",
      url: BASE_URL + INVENTORY_ENDPOINT,
      failOnStatusCode: false,
      body:""
    }).then((response) => {
      cy.log(
        `Returns pet inventories by status: ${JSON.stringify(response.body)}`
      );

      expect(response.status).to.equal(200);
      expect(response.body).to.be.jsonSchema(INVENTORY_SCHEMA);
    });
  });
});
