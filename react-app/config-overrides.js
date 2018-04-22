const fs = require('fs');
const beautify = require('json-beautify');

module.exports = function override(config, env) {
  fs.writeFileSync('../src/__tests__/webpack.config.json', beautify(config, null, 2, 80));
  return config;
};