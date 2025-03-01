const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 5000,
  requestTimeout: 9000,
  responseTimeout: 9000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    embeddedScreenshots: true,
    inlineAssets: true,
    reportDir: 'cypress/reports',
    reportFilename: 'Agibank Report',
    reportTitle: 'Agibank Report',
    reportPageTitle: 'report',
    takePassedScreenshot: false,
    clearOldScreenshots: false,
    shortScrFileNames: false,
    inline: true,
    charts: true,
    autoOpen: true,
    jsonReport: true,
    multiReport: true,
    timestamp: 'dd-mm-yyyy_HH-MM-ss',
    capture: 'runner',
  },
  retries: {
    runMode: 2,
    openMode: 2,
  },
  video: false,
  e2e: {
    baseUrl: 'https://blogdoagi.com.br',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
})
