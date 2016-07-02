weApp.directive('weObjectStructure', [function(){
  return {
    template: '<div class="panel panel-default">' +
                '<div class="panel-heading">' +
                  '{{title}}' +
                '</div>' +
                '<div class="panel-body">' +
                  '<span ng-show="targetObject[targetKey] == null">' +
                    '<we-data-loading></we-data-loading>' +
                  '</span>' +
                  '<span ng-show="targetObject[targetKey] != null">' +
                    '<ul>' +
                      '<li ng-repeat="(key, value) in targetObject[targetKey]">{{key}} <i>{{getTypeof(value)}}</i></li>' +
                    '</ul>' +
                  '</span>' +
                '</div>' +
              '</div>',
    restrict: 'E',
    scope: {
      title: '@',
      targetObject: '=',
      targetKey: '@'
    },
    link: function(scope, element, attrs){
      scope.getTypeof = function(value){
        return typeof value;
      };
    }
  };
}]);
