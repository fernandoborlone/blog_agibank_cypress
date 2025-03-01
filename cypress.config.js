const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 5000,
  requestTimeout: 9000,
  responseTimeout: 9000,
  retries: {
    runMode: 2,
    openMode: 2,
  },
  video: true,
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
