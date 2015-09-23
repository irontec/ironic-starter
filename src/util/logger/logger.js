(function() {
  'use strict';

  angular
  .module('util.logger')
  .provider('logger', logger);

  function logger() {
    var debugEnabled = false;

    this.setDebugEnabled = function (value) {
      debugEnabled = value;
    };

    this.$get = ['$log', 'toastr', function ($log, toastr) {

      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-full-width",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

      var service = {
        showToasts: true,

        error   : error,
        info    : info,
        success : success,
        warning : warning,
        debug   : debug,

        // straight to console; bypass toastr
        log     : $log.log
      };

      return service;
      /////////////////////

      function error(message, data, title) {
        toastr.error(message, title);
        $log.error('Error: ' + message, data);
      }

      function info(message, data, title) {
        toastr.info(message, title);
        $log.info('Info: ' + message, data);
      }

      function success(message, data, title) {
        toastr.success(message, title);
        $log.info('Success: ' + message, data);
      }

      function warning(message, data, title) {
        toastr.warning(message, title);
        $log.warn('Warning: ' + message, data);
      }

      function debug(message, data, title) {
        if (!debugEnabled)  return;

        toastr.debug(message, title);
        $log.debug('Debug: ' + message, data);
      }
    }];
  }
}());
