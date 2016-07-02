/* File: app/brands/details/brand-details-controller.js */

weApp.controller('WeDevResourcesController', ['WeMainService', 'WE_CONSTANTS', 'WeBackendService', 'WeToolService', 'WeBrandDetailsService', '$stateParams', function(WeMainService, WE_CONSTANTS, WeBackendService, WeToolService, WeBrandDetailsService, $stateParams){

  /* Private variables */

  var TAB_CONSTANTS = WE_CONSTANTS.SUBVIEWS.DEV_RESOURCES_TABS;
  var self = this;
  var authToken = WeMainService.user.token;
  var brandId = $stateParams.id;

  /* Public variables */

  self.lockdown = { status : true };
  self.mappedColumns = {};
  self.brandDetails = {};
  self.weBrandDetailsService = WeBrandDetailsService;
  self.mainService = WeMainService;
  self.tabs = [
    { name: TAB_CONSTANTS.PROTOTYPE.TITLE, url: "#/dev-resources/prototype", active: TAB_CONSTANTS.PROTOTYPE.ID },
    { name: TAB_CONSTANTS.OBJECT_STRUCTURES.TITLE, url: "#/dev-resources/object-structures", active: TAB_CONSTANTS.OBJECT_STRUCTURES.ID },
    { name: TAB_CONSTANTS.EXPERIMENT.TITLE, url: "#/dev-resources/experiment", active: TAB_CONSTANTS.EXPERIMENT.ID }
  ];

  /* Private functions */

  /* Public functions */

  /* Event handlers */

  /* Initiation */

  WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;

}]);
