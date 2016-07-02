/* File: app/profile/profile-constroller.js */

weApp.controller('WeProfileController', ['WeMainService', 'WE_CONSTANTS', 'WeBackendService', 'WeToolService', '$stateParams', function(WeMainService, WE_CONSTANTS, WeBackendService, WeToolService, $stateParams){

  /* Private variables */

  var self = this;
  var authToken = WeMainService.user.token;

  /* Public variables */

  self.lockdown = { status : true };
  self.mappedColumns = {};
  self.user = {};

  /* Private functions */

  /* Public functions */

  /* Event handlers */

  /* Initiation */

  WeBackendService.getUserById(authToken, { "id": $stateParams.id }, function(result){
    if(result){
      self.user = result[0];
      self.lockdown.status = false;
      WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;
    }
    else {
      WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.ERROR;
    }
  });

}]);
