const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      DropBoxToken: 'Your_refresh_token',
      authTokenUrl: 'https://api.dropbox.com/oauth2/token',
      authEndpoint: 'https://api.dropboxapi.com/2',
      filesEndpoint: 'https://content.dropboxapi.com/2',
      appKey: 'your_appKey',
      appSecret: 'your_appSecret'
    },
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
  video: false,
  screenshotOnRunFailure: false
});
