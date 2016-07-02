/* File: app/core/js/routes.js */

weApp.config(['$stateProvider', '$urlRouterProvider', 'WE_CONSTANTS', function($stateProvider, $urlRouterProvider, WE_CONSTANTS){

  /* Private variables */

  var STATES = WE_CONSTANTS.STATES;
  /* Private functions */

  function stateConfig(url, templateUrl, controller, id, title, abstractValue, targetObjectName){
    return {
      abstract: abstractValue,
      url: url,
      templateUrl: templateUrl,
      controller: controller,
      resolve: {
        userPromise: ['WeMainService', function(WeMainService){
          WeMainService[targetObjectName].id = id;
          WeMainService[targetObjectName].title = title;
          WeMainService[targetObjectName].initialLoadingState = WE_CONSTANTS.LOADING_STATES.LOADING;
        }],
      }
    };
  }

  /* Initiation */

  $urlRouterProvider.otherwise("/dashboard");

  for(var i = 0; i < STATES.length; i++){
      $stateProvider.state(STATES[i].NAME, stateConfig.apply(this, STATES[i].STATE_CONFIG));
  }

}]);
