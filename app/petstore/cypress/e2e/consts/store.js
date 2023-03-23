export const SUCCESSFUL_FIND = "200 OK";
export const SUCCESSFUL_CREATE = "200 Created";

export const BAD_REQUEST = "400 Bad Request";

export const ORDER_NOT_FOUND = "404 Order Not Found";
export const INVALID_ID_SUPPLIED = "400 Invalid ID Supplied";


// URLs & Endpoints
export const BASE_URL = Cypress.env("BASE_URL") + Cypress.env("STORE");
export const INVENTORY_ENDPOINT = Cypress.env("INVENTORY");
export const ORDER_ENDPOINT = Cypress.env("ORDER");

// Store
export const ORDER_INVALID_ID = "0o07";
export const INVENTORY_SCHEMA = {
  title: "Inventory Schema",
  type: "object",
  required: ["approved", "placed", "delivered"],
  properties: {
    approved: {
      type: "number",
    },
    placed: {
      type: "number",
    },
    delivered: {
      type: "number",
    },
  },
};

// Error
export const INPUT_ERROR =
  "Input error: unable to convert input to io.swagger.petstore.model.Order";
