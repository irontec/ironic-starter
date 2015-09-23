# Ironic-Starter

## How to use it

To install [Ionic Framework](http://ionicframework.com/) and start a project using this starter:

```bash
$ npm install -g ionic cordova
$ ionic start myApp https://github.com/MikelEiza/ironic-starter
```

## Style Guide

This starter has been developed following this [Style Guide](https://github.com/johnpapa/angular-styleguide) from [@Todd Motto](https://twitter.com/toddmotto) and [@John Papa](https://twitter.com/john_papa).

## Utilities included

This starter project contains some useful utilities to use right out the box.

### Exception handler

The exception handler utility is used to catch exceptions and log them using the logger utility. It is useful to display exception errors in the console and screen.

### Logger

It is a utility that provides methods to display different messages on the screen and in the console. It can display *info*, *warning*, *error*, *success* and *debug* messages.

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

### Router

This utility is used to catch and handle routing errors.

## Folder Structure

```bash
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

For each main feature there is a folder with some files:
  - **Feature.module.js**: creates an angular module.
  - **Feature.routes.js**: specifies the different *states* of the feature.
  - **Feature.js**: is the *controller* of the feature.
  - **Feature.html**: is the *view* of the template.

#### app.js / core

The *app.js* file is only used to create the main module and specify the dependencies. The *config* and *run* methods are executed from the *core/config.js* file.

That *config.js* file contains the minimum route configuration, sets the logger's configuration and inits the main components.

#### layout

This folder contains the view used to display the tabs.
