/* File: app/main/main-service.js */

weApp.factory('WeMainService', ['WE_CONSTANTS', function(WE_CONSTANTS){

  function StateClass(id, initialLoadingState, title, promise){
    var self = this;

    self.id = id;
    self.initialLoadingState = initialLoadingState;
    self.title = title;
  }

  return {
    isLoaded: false,

    page: new StateClass(WE_CONSTANTS.PAGES.DEFAULT, WE_CONSTANTS.LOADING_STATES.DONE, '', null),
    subview: new StateClass(null, WE_CONSTANTS.LOADING_STATES.DONE, '', null),

    user: {},
    promises: {
      user: null
    }
  };

}]);
