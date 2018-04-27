const { createLoaderMatcher, addBeforeRule } = require('./utils');

const babelLoaderMatcher = createLoaderMatcher('eslint-loader');

module.exports = function rewire(config, env, options = {}) {
  const rules = {
    loader: 'stylelint-custom-processor-loader',
    options: {
      configPath: options.configPath,
      emitWarning: options.emitWarning || true
    },
  };
  addBeforeRule(config.module.rules, babelLoaderMatcher, rules);
  return config;
}