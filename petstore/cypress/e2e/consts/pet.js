// Operation
export const SUCCESSFUL_CREATE = "200 Created";
export const SUCCESSFUL_UPDATE = "200 Updated";
export const SUCCESSFUL_FIND = "200 OK";

export const BAD_REQUEST = "400 Bad Request";

// Update TC
export const PET_NOT_FOUND = "404 Pet Not Found";
export const INVALID_ID_SUPPLIED = "400 Invalid ID Supplied";

// Find By Status TC
export const INVALID_STATUS_VALUE = "400 Invalid Status Value";

// Pet
export const PET_NAME_UPDATED = "Dawg";
export const PET_INVALID_ID = "0o07";
export const PET_STATUS_AVAILABLE = "available";
export const PET_STATUS_SOLD = "sold";
export const PET_STATUS_PENDING = "pending";
export const INVALID_PET_STATUS = "in relationship";

export const PET_STATUS = [
  PET_STATUS_AVAILABLE,
  PET_STATUS_SOLD,
  PET_STATUS_PENDING,
];

// URLs & Endpoints
export const BASE_URL = Cypress.env("BASE_URL") + Cypress.env("PET");
export const FIND_BY_STATUS_ENDPOINT = Cypress.env("FIND_BY_STATUS");

// Error
export const INPUT_ERROR =
  "Input error: unable to convert input to io.swagger.petstore.model.Pet";
