const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "iejv9f",
  e2e: {
    specPattern: "**/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
  },
  env: {
    BASE_URL: "https://petstore3.swagger.io/api/v3",
    PET: "/pet",
    FIND_BY_STATUS: "/findByStatus",
  },
});
