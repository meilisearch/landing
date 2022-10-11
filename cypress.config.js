const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  scrollBehavior: 'center',
  projectId: '4ja87b',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // setupNodeEvents(on, config) {
    //   return require('./cypress/plugins/index.js')(on, config)
    // },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  blockHosts: ['*.segment.com'],
})
