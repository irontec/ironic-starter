(function() {
    'use strict';

    angular
    .module('app.user')
    .config(function ($stateProvider) {

      $stateProvider.state('menu.user', {
        url: '/user',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'src/user/user.html',
            controller: 'User as vm'
          }
        }
      });

    })
})();
