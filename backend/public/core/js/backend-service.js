/* File: app/core/js/backend-abstract-service.js */

weApp.factory('WeBackendService', ['$http', 'WE_CONSTANTS', function($http, WE_CONSTANTS){

  /* Private variables */

  var BACKEND = WE_CONSTANTS.BACKEND;

  var backendFunctions = {};

  /* Private functions */

  function backendCall(requestedUrl, method, parameters, resultNames, callback){

    if(WE_CONSTANTS.DEBUG.BACKEND){
      console.log(method + " arguments for backend request '" + requestedUrl + "':");
      console.log(parameters);
    }

    return $http[method](requestedUrl, parameters) .then(function(result){
      if(WE_CONSTANTS.DEBUG.BACKEND){
        console.log("Response for backend request '" + requestedUrl + "':");
        console.log(result);
      }
      /* Is a key specified? Then check the value */
      if(resultNames.STATUS_KEY !== null && result.data[resultNames.STATUS_KEY] == resultNames.STATUS_SUCCESS){
        callback(result.data[resultNames.DATA_KEY]);
      }
      /* No key specified? Then check if there is any raw data. */
      else if(resultNames.STATUS_KEY === null && result.data){
        callback(result.data);
      }
      /* No raw data? Throw a failure message */
      else {
        console.log("Calling " + requestedUrl + " failed. Status: " + result.data[resultNames.STATUS_KEY]);
        callback(false);
      }
    }, function(err){
      console.log("An error occurred while calling " + requestedUrl);
      console.log("Error:");
      console.log(err);
      callback(false);
    });
  }

  function createFunction(backend){
    return function(){

      var callback = arguments[arguments.length - 1];
      var parameters = {};

      for(var j = 0; j < arguments.length - 1; j++){
        parameters[backend.PARAMETERS[j]] = arguments[j];
      }

      return backendCall(backend.URL, backend.METHOD, parameters, backend.RESULT, callback);
    };
  }

  /* Compile the backend calls */

  for(var key in BACKEND){
    backendFunctions[BACKEND[key].NAME] = createFunction(BACKEND[key]);
  }

  /* Return the backend calls object */

  return backendFunctions;

}]);
