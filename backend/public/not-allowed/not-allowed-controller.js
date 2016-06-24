/* File: app/not-allowed/not-allowed-controller.js */

weApp.controller('WeNotAllowedController', ['WeMainService', 'WE_CONSTANTS', function(WeMainService, WE_CONSTANTS){

  /* Private variables */

  var self = this;
  var authToken = WeMainService.user.token;

  /* Public variables */

  self.user = WeMainService.user;
  self.lockdown = { status: true };

  /* Initiation */

  WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;
}]);
