const path = require('path')

/**
 * @param {Object} rule
 * @return {Array}
 */
export const ruleChildren = rule =>
  rule.use || rule.oneOf || (Array.isArray(rule.loader) && rule.loader) || []

export const findIndexAndRules = (rulesSource, ruleMatcher) => {
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
export const createLoaderMatcher = loader => rule =>
  rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1

/**
* Add one rule before another in the list of rules.
*/
export const addBeforeRule = (rulesSource, ruleMatcher, value) => {
  const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher)
  rules.splice(index, 0, value)
}