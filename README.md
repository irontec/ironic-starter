# Ironic-Starter

This starter was developed to start new projects with some built-in useful utilities. Most of them are to handle errors and exceptions and display them visually. Thanks to them it is easier to see what's going on in the application.

Also, it is a good starting point to follow some good practices. It is structured to develop scalable and maintainable [Ionic Framework](http://ionicframework.com/) apps; its structure is modularized into very specific functions.

[![ironic-starter features](https://cloud.githubusercontent.com/assets/1042187/10096426/ad02ff4e-6371-11e5-9789-21e2e0ff49c5.png)](https://cloud.githubusercontent.com/assets/1042187/10096426/ad02ff4e-6371-11e5-9789-21e2e0ff49c5.png)

## How to use it

To install [Ionic Framework](http://ionicframework.com/) and start a project using this starter:

```bash
$ npm install -g ionic cordova
$ ionic start myApp https://github.com/MikelEiza/ironic-starter
$ cd myApp
$ ionic serve
```

## Style Guide

This starter has been developed following the style guides from [Todd Motto](https://github.com/toddmotto/angularjs-styleguide) and [John Papa](https://github.com/johnpapa/angular-styleguide).

## Utilities included

This starter project contains some useful utilities to use right out the box. Some of them are based on [John Papa](http://johnpapa.net/) and [Yi Chen Zhu](https://github.com/yichenzhu1337) code.

### Exception handler

The exception handler utility is used to catch exceptions and log them using the logger utility. It is useful to display exception errors in the console and screen.

```js
function testException() {
  throw { message: 'Exception test error' };
}
```
### Logger

It is a utility that provides methods to display different messages on the screen and in the console. It can display *info*, *warning*, *error*, *success* and *debug* messages.

```js
function testLoggerInfo() {
  logger.info('This is a INFO test', infoData, 'Test title');
}

function testLoggerError() {
  logger.error('This is a ERROR test', errorData, 'Test title');
}

function testLoggerWarning() {
  logger.warning('This is a WARNING test', warningData, 'Test title');
}

function testLoggerDebug() {
  logger.debug('This is a DEBUG test', debugData, 'Test Debug');
}
```

The debug mode can be enabled/disabled via *loggerProvider*.

```js
angular.module('app')
.config(loggerConfig)

function loggerConfig(loggerProvider) {
  loggerProvider.setDebugEnabled( true );
}
```

### Modal

It is a factory to show and hide modal windows.

```js
function testModal() {
  modal.show('src/modal/modalTest.html', 'Modal as vm')
  .then(function(result) {
    // result
  }, function(err) {
    // error
  });
}
```
### Router

This utility is used to catch and handle routing errors.

For example, if the application tries to go to a non-existent state, this utility will trigger an exception.

```js
function testRouterHelper() {
  $state.go('fake-state')
}
```

## Folder Structure

```
.
|____css
|____img
|____index.html
|____lib
|____src
  |____app.js
  |____contact
  | |____contact.html
  | |____contact.js
  | |____contact.module.js
  | |____contact.routes.js
  |____core
  | |____config.js
  |____layout
  | |____tabs.html
  |____main
  | |____main.html
  | |____main.js
  | |____main.module.js
  | |____main.routes.js
  |____modal
  | |____modal.js
  | |____modalTest.html
  |____util
    |____constants.js
    |____exception
    | |____exception-handler.provider.js
    | |____exception.js
    | |____exception.module.js
    |____logger
    | |____logger.js
    | |____logger.module.js
    |____modal
    | |____modal.js
    | |____modal.module.js
    |____router
    | |____router.js
    | |____router.module.js
    |____util.module.js
```

#### Folders-By-Feature

For each main feature there is a folder with some files. The minimum files are the following ones:
  - **Feature.module.js**: creates an angular module.
  - **Feature.routes.js**: specifies the different *states* of the feature.
  - **Feature.js**: is the main *controller* of the feature.
  - **Feature.html**: is the main *view* of the feature.

#### app.js / core

The *app.js* file is only used to create the main module and specify the dependencies. The *config* and *run* methods are executed from the *core/config.js* file.

That *config.js* file contains the minimum route configuration, sets the logger's configuration and inits the main components.

#### Layout folder

This folder contains the view used to display the tabs.
