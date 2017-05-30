(function() {
    'use strict';

    angular
    .module('app.qrsignature')
    .config(function ($stateProvider) {

      $stateProvider.state('menu.qrsignature', {
        url: '/qrsignature',
        views: {
          'menuContent': {
            templateUrl: 'src/qrsignature/qrsignature.html',
            controller: 'Qrsignature as vm'
          }
        }
      });

    })
})();
