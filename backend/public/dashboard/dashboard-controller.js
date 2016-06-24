/* File: app/dashboard/dashboard-controller.js */

weApp.controller('WeDashboardController', ['WeMainService', 'WE_CONSTANTS', function(WeMainService, WE_CONSTANTS){
  /* Private variables */

  var self = this;
  var authToken = WeMainService.user.token;

  /* Public variables */

  self.user = WeMainService.user;
  self.lockdown = { status: false };
  self.myObj = {
    textEditor: '',
    textOutput: ''
  };

  /* Initiation */

  WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;
}]);
