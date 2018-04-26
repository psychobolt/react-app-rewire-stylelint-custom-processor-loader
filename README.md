# React App Rewire Plugin Boilerplate

[![Dependencies Status](https://david-dm.org/psychobolt/react-app-rewire-plugin-boilerplate.svg)](https://david-dm.org/psychobolt/react-app-rewire-plugin-boilerplate)
[![Dev Dependencies Status](https://david-dm.org/psychobolt/react-app-rewire-plugin-boilerplate/dev-status.svg)](https://david-dm.org/psychobolt/react-app-rewire-plugin-boilerplate?type=dev)
[![Peer Dependencies Status](https://david-dm.org/psychobolt/react-app-rewire-plugin-boilerplate/peer-status.svg)](https://david-dm.org/psychobolt/react-app-rewire-plugin-boilerplate?type=peer)

[![Build Status](https://travis-ci.org/psychobolt/react-app-rewire-plugin-boilerplate.svg?branch=master)](https://travis-ci.org/psychobolt/react-app-rewire-plugin-boilerplate)
[![codecov](https://codecov.io/gh/psychobolt/react-app-rewire-plugin-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/psychobolt/react-app-rewire-plugin-boilerplate)


The essential boilerplate for creating react-app-rewired plugins

## Included

- Empty CRA project with [react-app-rewired](https://github.com/timarney/react-app-rewired) v1.x and [react-scripts](https://www.npmjs.com/package/react-scripts) v1.x
- JavaScript unit test runner [Jest](https://facebook.github.io/jest/)
- Webpack config parse [utils](src/utils.js)
- Code coverage reporter [Codecov](https://codecov.io/)
- [VS Code](https://code.visualstudio.com) debugger configs

## Setup

1. Install the latest [Node JS LTS](https://nodejs.org/) and [Yarn](https://yarnpkg.com) and simply run ```yarn``` or ```yarn install``` command in the root and react-app directory.
2. Generate webpack test config with ```cd react-app/``` and ```yarn build```.

> Note: You should generate a new webpack test config whenver you upgrade react-scripts from react-app.

## Test Driven Development

Make any changes to src/index.js and ```yarn start``` to watch tests with coverage.