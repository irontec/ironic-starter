(function() {
    'use strict';

    angular
    .module('app.main')
    .config(function ($stateProvider) {

      $stateProvider.state('menu.main', {
        url: '/main',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'src/main/main.html',
            controller: 'Main as vm'
          }
        }
      });

    })
})();
