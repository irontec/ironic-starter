(function() {
  'use strict';

  angular
  .module('app.user')
  .controller('User', User);

  /* @ngInject */
  function User(logger, modal, $state, $ionicLoading, $sce, ApiEndpoint) {
    var vm = this;
    // Variables
    vm.title = 'Mi cuenta';
    vm.iframeUrl = $sce.trustAsResourceUrl(ApiEndpoint.url + '/?page_id=803&tokenMobile=fBIRmZWq3jscvPSrCI7ZIMBGojxpVe&codeRandom='+ (new Date()).getTime());

    $ionicLoading.show({
        template: 'Cargando...'
    });
    
    vm.iframeLoadedCallBack = function(){
        // do stuff
        $ionicLoading.hide();
    }
  }
})();
