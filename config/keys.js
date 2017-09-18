// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - retun the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in devlopment - return the dev keys
  module.exports = require('./dev');
}
