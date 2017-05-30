(function() {
  'use strict';

  angular
  .module('app.main')
  .controller('Main', Main);

  /* @ngInject */
  function Main(logger, modal, $state) {
    var vm = this;
    // Variables
    vm.title = 'Main';

    // Methods
    vm.testLogger = testLogger;
    vm.testLoggerDebug = testLoggerDebug;
    vm.testModal = testModal;
    vm.testException = testException;
    vm.testRouterHelper = testRouterHelper;
    //////////////////////////////

    function testLogger() {
      logger.info('This is a test', null, 'Test title');
    }

    function testLoggerDebug() {
      logger.debug('This is a debug test message', null, 'Test Debug');
    }

    function testModal() {
      modal.show('src/modal/modalTest.html', 'Modal as vm')
      .then(function(result) {
        // result
      }, function(err) {
        // error
      });
    }

    function testException() {
      throw { message: 'Exception test error' };
    }

    function testRouterHelper() {
      $state.go('fake-state')
    }
  }
})();
