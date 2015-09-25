(function () {
  "use strict";

  angular
  .module('util.router')
  .factory('Router', Router);

  /* @ngInject */
  function Router($state, $rootScope, logger) {
    var handlingRouteChangeError = false;
    var routeCounts = {
      errors: 0,
      changes: 0
    };

    var goDefaultState = function () {
      $state.reload();
    };

    init();

    return {
      goDefaultState: goDefaultState
    };

    function init() {
      handleRouteErrors();
      handleRouteSuccesses();
      handleRouteNotFound();
    }

    function handleRouteNotFound() {
      $rootScope.$on('$stateNotFound',
      function (event, unfoundState, fromState, fromParams) {
        if (handlingRouteChangeError) {
          return;
        }
        handlingRouteChangeError = true;
        routeCounts.errors++;

        var parent = fromState.parent ? fromState.parent + '.' : '';

        // Log State not found
        var msg = '[State not found] Error routing to ' +
        unfoundState.to + ' from ' + parent  +
        fromState.name + '.';
        logger.warning(msg);
        goDefaultState();
      });
    }

    function handleRouteSuccesses() {
      $rootScope.$on('$stateChangeSuccess',
      function () {
        handlingRouteChangeError = false;
        routeCounts.changes++;
      });
    }

    function handleRouteErrors() {
      $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {
        if (handlingRouteChangeError) {
          return;
        }
        handlingRouteChangeError = true;
        routeCounts.errors++;

        // Log State routing error
        var msg = '[State Routing Error] ' +
        'Error routing to ' + toState.name + ' from ' + fromState.name + '.' +
        ' Error: ' + error.data;
        logger.warning(msg, [error]);
        goDefaultState();
      });
    }
  }
})();
