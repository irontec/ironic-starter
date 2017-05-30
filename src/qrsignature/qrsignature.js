(function() {
  'use strict';

  angular
  .module('app.qrsignature')
  .controller('Qrsignature', Qrsignature);
  

  /* @ngInject */
  function Qrsignature(logger, ApiEndpoint, $sce, $ionicLoading) {
    var vm = this;
    // Variables
    vm.title = 'Firma QR';
    vm.urlContract = false;
    
    // Methods
    vm.accessCamera = function(){
        if(window.cordova) {
            cordova.plugins.barcodeScanner.scan(
              function (result) {
                  if (result.cancelled) {
                      logger.debug('Escaneo cancelado');
                  } else if (!result.text.includes(ApiEndpoint.url) || (result.format != 'QR_CODE')) {
                      logger.debug('Este código no es del Grupo Fanjul', null, 'Código QR no válido');
                  } else {
                      $ionicLoading.show({
                            template: 'Comprobando contrato...'
                      });
                      vm.urlContract = $sce.trustAsResourceUrl(result.text + '&codeRandom='+ (new Date()).getTime());
                  }
              }, 
              function (error) {
                  throw { message: "Scanning failed: " + error };
              }
            );
        }
    }
    
    vm.iframeLoadedCallBack = function() {
        // do stuff
        $ionicLoading.hide();
    }
  }
})();
