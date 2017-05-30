(function() {
  'use strict';

  angular
  .module('app.main')
  .controller('Main', Main);

  /* @ngInject */
  function Main(logger, modal, $state, $ionicLoading, $sce, ApiEndpoint) {
    var vm = this;
    // Variables
    vm.title = 'Transferencia de vehículo online';
    vm.iframeUrl = $sce.trustAsResourceUrl(ApiEndpoint.url + '/?product=transferencia-de-vehiculo-online&tokenMobile=fBIRmZWq3jscvPSrCI7ZIMBGojxpVe&codeRandom='+ (new Date()).getTime());

    $ionicLoading.show({
        template: 'Cargando...'
    });
    
    vm.iframeLoadedCallBack = function(){
        // do stuff
        $ionicLoading.hide();
    }
  }
})();
