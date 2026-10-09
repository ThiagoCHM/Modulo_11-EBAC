const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "n7n6ng",
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: "http://localhost:3000/",
    screenshotOnRunFailure: true,
    video: true
  },
});