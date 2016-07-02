/* File: app/core/js/we-tool-service.js */

weApp.factory('WeToolService', [function(){
  return {
    findWithAttr: function(array, attr, value)
    {
      for(var i = 0; i < array.length; i += 1)
      {
          if(array[i][attr] === value)
          {
              return i;
          }
      }
    }
  }; /* End return */

}]);
