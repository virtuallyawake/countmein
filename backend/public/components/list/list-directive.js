weApp.directive('weList', ['WE_CONSTANTS', function(WE_CONSTANTS){

  return {
    templateUrl: 'components/list/list.html',
    restrict: 'E',
    scope:{
      weListTarget: '=',
    },
    link: function(scope, element, attributes){
      scope.CONTENT_TYPES = WE_CONSTANTS.CONTENT_TYPES;
    }
  };

}]);
