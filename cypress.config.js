const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 5000,
  requestTimeout: 5000,
  responseTimeout: 5000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Agibank Test Report',
    reportFilename: 'agibank_report',
    reportTitle: 'Agibank Blog',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports/html',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'dd-mm-yyyy_HH-MM-ss',
  },
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
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
})
