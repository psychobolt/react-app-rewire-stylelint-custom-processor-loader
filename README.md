# React App Rewire Plugin Boilerplate

[![Dependencies Status](https://david-dm.org/psychobolt/react-app-rewire-plugin-boilerplate.svg)](https://david-dm.org/psychobolt/react-app-rewire-plugin-boilerplate)
[![Dev Dependencies Status](https://david-dm.org/psychobolt/react-app-rewire-plugin-boilerplate/dev-status.svg)](https://david-dm.org/psychobolt/react-app-rewire-plugin-boilerplate?type=dev)
[![Peer Dependencies Status](https://david-dm.org/psychobolt/react-app-rewire-plugin-boilerplate/peer-status.svg)](https://david-dm.org/psychobolt/react-app-rewire-plugin-boilerplate?type=peer)

[![Build Status](https://travis-ci.org/psychobolt/react-app-rewire-plugin-boilerplate.svg?branch=master)](https://travis-ci.org/psychobolt/react-app-rewire-plugin-boilerplate)
[![codecov](https://codecov.io/gh/psychobolt/react-app-rewire-plugin-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/psychobolt/react-app-rewire-plugin-boilerplate)


The essential boilerplate for creating react-app-rewired plugins

## Included

- Empty CRA project with [react-app-rewired](https://github.com/timarney/react-app-rewired)
- JavaScript unit test runner [Jest](https://facebook.github.io/jest/)
- Webpack config parse [utils](src/utils.js)
- Code coverage reporter [Codecov](https://codecov.io/)

## Setup

Install the latest [Node JS LTS](https://nodejs.org/) and [Yarn](https://yarnpkg.com) and simply run ```yarn``` or ```yarn install``` command in the root and react-app directory.

## Test Driven Development

Make any changes to src/index.js and watch tests using ```yarn test --watch [--coverage]```.