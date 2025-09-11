const { defineConfig } = require("cypress");
const cucumber = require ("cypress-cucumber-preprocessor").default
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      allureWriter(on, config)
      return config
    },
    env: {
        allureResultsPath: "allure-results",  // pasta onde os resultados são gravados
        allureHistoryPath: "allure-history"
    }
  },
});