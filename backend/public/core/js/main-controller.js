/* File: app/main/main-controller.js */

weApp.controller("WeMainCtrl", ['WeMainService', 'WeBackendService', '$window', 'WE_CONSTANTS', function(WeMainService, WeBackendService, $window, WE_CONSTANTS){

  /* Private variables */

  var self = this;
  var BASEPATH = WE_CONSTANTS.BASEPATH;

  /* Public variables */

  self.mainService = WeMainService;
  self.WE_PAGES = WE_CONSTANTS.PAGES;
  self.LOADING_STATES = WE_CONSTANTS.LOADING_STATES;
  self.overlayMessage = "App wordt geladen...";

  /* Private functions */

  /* Public functions */

  self.logOut = function(){
    self.mainService.isLoaded = false;
    self.overlayMessage = "App wordt afgesloten...";
    WeBackendService.logOut(function(result){
      $window.location.href = BASEPATH + 'architecture/prototype2/app/signin';
    });
  };

  /* Event handlers */

  /* Initiation */

}]);
