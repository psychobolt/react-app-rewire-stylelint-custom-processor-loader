const fs = require('fs');
const path = require('path');
const { loadData } = require('json-import-loader');

const rewire = require('../index');

const CONFIG = loadData(path.resolve(__dirname, './webpack.config.json'));

it('rewire config', () => {
  const config = rewire(CONFIG);
});
