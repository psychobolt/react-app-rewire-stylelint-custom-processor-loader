const path = require('path')

/**
 * @param {Object} rule
 * @return {Array}
 */
const ruleChildren = rule =>
  rule.use || rule.oneOf || (Array.isArray(rule.loader) && rule.loader) || []

const findIndexAndRules = (rulesSource, ruleMatcher) => {
  let result
  const rules = Array.isArray(rulesSource)
    ? rulesSource
    : ruleChildren(rulesSource)
  rules.some(
    (rule, index) =>
      (result = ruleMatcher(rule)
        ? { index, rules }
        : findIndexAndRules(ruleChildren(rule), ruleMatcher))
  )
  return result
}

/**
 * Given a rule, return if it uses a specific loader.
 */
const createLoaderMatcher = (loader, sep = path.sep) => rule =>
  rule.loader && rule.loader.indexOf(`${sep}${loader}${sep}`) !== -1

/**
* Add one rule before another in the list of rules.
*/
const addBeforeRule = (rulesSource, ruleMatcher, value) => {
  const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher)
  rules.splice(index, 0, value)
}

module.exports = {
  ruleChildren,
  findIndexAndRules,
  createLoaderMatcher,
  addBeforeRule
};
