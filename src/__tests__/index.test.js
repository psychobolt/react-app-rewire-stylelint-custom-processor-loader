const fs = require('fs');
const path = require('path');
const { loadData } = require('json-import-loader');

const rewire = require('../index');

let config = loadData(path.resolve(__dirname, './webpack.config.json'));

it('rewire config', () => {
  config = rewire(config);
});
