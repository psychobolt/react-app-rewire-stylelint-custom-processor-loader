# React App Rewire Stylelint Custom Processor Loader

[![npm](https://img.shields.io/npm/v/react-app-rewire-stylelint-custom-processor-loader.svg)](https://www.npmjs.com/package/react-app-rewire-stylelint-custom-processor-loader)
[![Build Status](https://travis-ci.org/psychobolt/react-app-rewire-stylelint-custom-processor-loader.svg?branch=master)](https://travis-ci.org/psychobolt/react-app-rewire-stylelint-custom-processor-loader)
[![codecov](https://codecov.io/gh/psychobolt/react-app-rewire-stylelint-custom-processor-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/psychobolt/react-app-rewire-stylelint-custom-processor-loader)


[![Dependencies Status](https://david-dm.org/psychobolt/react-app-rewire-stylelint-custom-processor-loader.svg)](https://david-dm.org/psychobolt/react-app-rewire-stylelint-custom-processor-loader)
[![Dev Dependencies Status](https://david-dm.org/psychobolt/react-app-rewire-stylelint-custom-processor-loader/dev-status.svg)](https://david-dm.org/psychobolt/react-app-rewire-stylelint-custom-processor-loader?type=dev)
[![Peer Dependencies Status](https://david-dm.org/psychobolt/react-app-rewire-stylelint-custom-processor-loader/peer-status.svg)](https://david-dm.org/psychobolt/react-app-rewire-stylelint-custom-processor-loader?type=peer)

Configure CRA project to stylelint with [stylelint-custom-processor-loader](https://github.com/emilgoldsmith/stylelint-custom-processor-loader).

## Install

```
npm install react-app-rewire-stylelint-custom-processor
# or
yarn add react-app-rewire-stylelint-custom-processor
```

## Usage

```js
// config-overrides.js
const rewireStylelintCustomProcessor = require('react-app-rewire-stylelint-custom-processor');

module.exports = function override(config, env) {
  config = rewireStylelintCustomProcessor(config, env, { /* options... */ });
  return config;
}
```