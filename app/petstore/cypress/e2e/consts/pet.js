export const // Operation
  SUCCESSFUL_CREATE = "200 Created",
  SUCCESSFUL_UPDATE = "200 Updated",
  SUCCESSFUL_FIND = "200 OK",
  BAD_REQUEST = "400 Bad Request",
  PET_NOT_FOUND = "404 Pet Not Found",
  INVALID_ID_SUPPLIED = "400 Invalid ID Supplied",
  INVALID_STATUS_VALUE = "400 Invalid Status Value",
  // Pet
  PET_NAME_UPDATED = "Dawg",
  PET_INVALID_ID = "0o07",
  PET_STATUS_AVAILABLE = "available",
  PET_STATUS_SOLD = "sold",
  PET_STATUS_PENDING = "pending",
  INVALID_PET_STATUS = "in relationship",
  PET_STATUS = [PET_STATUS_AVAILABLE, PET_STATUS_SOLD, PET_STATUS_PENDING],
  // URLs & Endpoints
  BASE_URL = Cypress.env("BASE_URL") + Cypress.env("PET"),
  FIND_BY_STATUS_ENDPOINT = Cypress.env("FIND_BY_STATUS"),
  // Error
  INPUT_ERROR =
    "Input error: unable to convert input to io.swagger.petstore.model.Pet";
