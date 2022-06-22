exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://agapito-server.herokuapp.com',
      defaultHeaders: {
        'Authorization': '',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-api',
  translation: 'pt-BR',
  plugins: {
    allure: { }
  }
}