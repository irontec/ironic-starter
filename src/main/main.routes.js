(function() {
    'use strict';

    angular
    .module('app.main')
    .config(function ($stateProvider) {

      $stateProvider.state('tab.main', {
        url: '/main',
        views: {
          'tab-main': {
            templateUrl: 'src/main/main.html',
            controller: 'Main as vm'
          }
        }
      });

    })
})();
