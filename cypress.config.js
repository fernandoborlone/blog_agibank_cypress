const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 9000,
  requestTimeout: 5000,
  responseTimeout: 5000,
  retries: {
    runMode: 2,
    openMode: 2,
  },
  e2e: {
    baseUrl: 'https://blogdoagi.com.br',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}) 