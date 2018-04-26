const fs = require('fs');
const path = require('path');
const { loadData } = require('json-import-loader');

const rewire = require('../index');
const { createLoaderMatcher, findIndexAndRules } = require('../utils');

const CONFIG = loadData(path.resolve(__dirname, './webpack.config.json'));
const matcher = rule => rule.loader && rule.loader === 'stylelint-custom-processor-loader';

it('rewire config should add loader before babel-loader', () => {
  const config = rewire(CONFIG);
  const { index, rules } = findIndexAndRules(config.module.rules, matcher);
  expect(rules[index + 1].loader.indexOf(`${path.sep}babel-loader${path.sep}`)).toBeGreaterThan(-1);
});
