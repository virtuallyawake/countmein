/* File: app/core/js/run.js */

weApp.run(['WeMainService', 'WeBackendService', '$q', '$window', 'WE_CONSTANTS', '$rootScope', '$state', function(WeMainService, WeBackendService, $q, $window, WE_CONSTANTS, $rootScope, $state){

  /* Private variables */

  var BASEPATH = WE_CONSTANTS.BASEPATH;
  var url = $window.location.href;

  /* Event handlers */

  /* Initiation */

  WeMainService.isLoaded = true;

}]);
