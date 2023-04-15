export const // Operation
  SUCCESSFUL_FIND = "200 OK",
  SUCCESSFUL_CREATE = "200 Created",
  BAD_REQUEST = "400 Bad Request",
  ORDER_NOT_FOUND = "404 Order Not Found",
  INVALID_ID_SUPPLIED = "400 Invalid ID Supplied",
  // URLs & Endpoints
  BASE_URL = Cypress.env("BASE_URL") + Cypress.env("STORE"),
  INVENTORY_ENDPOINT = Cypress.env("INVENTORY"),
  ORDER_ENDPOINT = Cypress.env("ORDER"),
  // Store
  ORDER_INVALID_ID = "0o07",
  INVENTORY_SCHEMA = {
    title: "Inventory Schema",
    type: "object",
    required: [],
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
  },
  // Error
  INPUT_ERROR =
    "Input error: unable to convert input to io.swagger.petstore.model.Order";
