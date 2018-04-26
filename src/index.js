const { createLoaderMatcher, addBeforeRule } = require('./utils');

const babelLoaderMatcher = createLoaderMatcher('babel-loader');

module.exports = function rewire(config, env, options) {
  const rules = {
    test: /\.(js|jsx)?/,
    loader: 'stylelint-custom-processor-loader',
    exclude: /node_modules/,
    options,
  };
  addBeforeRule(config.module.rules, babelLoaderMatcher, rules);
  return config;
}