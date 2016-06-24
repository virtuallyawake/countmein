/* File: app/object-structures/object-structures-controller.js */

weApp.controller('WeObjectStructuresController', ['WeMainService', 'WE_CONSTANTS', 'WeBackendService', 'WeToolService', function(WeMainService, WE_CONSTANTS, WeBackendService, WeToolService){

  /* Private variables */

  var self = this;
  var authToken = WeMainService.user.token;
  var accountid = '';

  /* Public variables */

  self.LOADING_STATES = WE_CONSTANTS.LOADING_STATES;
  self.lockdown = { status : true };
  self.user = null;
  self.brand = null;
  self.ahaEntry = null;
  self.note = null;

  /* Private functions */

  /* Public functions */

  self.getTypeof = function(variable){
    return typeof variable;
  };

  /* Event handlers */

  /* Initiation */

  WeMainService.subview.initialLoadingState = self.LOADING_STATES.DONE;

  WeBackendService.getAllBrands(authToken, function(result){
    self.brand = result[0];
    accountid = result[WeToolService.findWithAttr(result, 'brand_name', 'Make Marketing Magic')].accountid;
  }).then(function(){
    WeBackendService.getAllNotes(authToken, accountid, function(result){
      self.note = result[0];
    });
  });

  WeBackendService.getAllUsers(authToken, function(result){
    self.user = result.all_users[0];
  });

  WeBackendService.getAhaEntries(authToken, function(result){
    self.ahaEntry = result[0];
  });

}]);
