(function() {
  'use strict';

  angular.module('app')
  .config(routesConfig)
  .config(loggerConfig)
  .directive('iframeOnload',iframeOnload)
  .run(initCoreComponents);

  function routesConfig($stateProvider, $urlRouterProvider) {

    $stateProvider.state('menu', {
      url: "/menu",
      abstract: true,
      templateUrl: "src/layout/menu.html",
    })

    $urlRouterProvider.otherwise("/menu/main");
  }

  function loggerConfig(loggerProvider) {
    loggerProvider.setDebugEnabled( true );
  }

  function initCoreComponents($ionicPlatform, Router) {

    $ionicPlatform.ready(function() {

      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      
      if(window.StatusBar) {
//        StatusBar.styleDefault();
//        StatusBar.styleLightContent();
    	  $cordovaStatusbar.styleHex('#009b97');
      }
    });
  }
  
  function iframeOnload() {
      return {
            scope: {
                callBack: '&iframeOnload'
        },
        link: function(scope, element, attrs){
            element.on('load', function(){
                return scope.callBack();
            })
        }
      }
  }

})();
