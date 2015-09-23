(function() {
  'use strict';

  angular.module('app')
  .config(routesConfig)
  .config(loggerConfig)
  .run(initCoreComponents);

  function routesConfig($stateProvider, $urlRouterProvider) {

    $stateProvider.state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "src/layout/tabs.html",
    })

    $urlRouterProvider.otherwise("/tab/main");
  }

  function loggerConfig(loggerProvider) {
    loggerProvider.setDebugEnabled( true );
  }

  function initCoreComponents(Router) {

  }

})();
