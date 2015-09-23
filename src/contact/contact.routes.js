(function() {
    'use strict';

    angular
    .module('app.contact')
    .config(function ($stateProvider) {

      $stateProvider.state('tab.contact', {
        url: '/contact',
        views: {
          'tab-contact': {
            templateUrl: 'src/contact/contact.html',
            controller: 'Contact as vm'
          }
        }
      });

    })
})();
