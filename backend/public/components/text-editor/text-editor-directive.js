/* File: app/components/we-text-editor/we-text-editor-directive.js */

weApp.directive('weTextEditor', ['$interval', function($interval){
  return {
    template: '<textarea class="weMarkdownEditor" ng-model="targetObject[targetInputKey]" rows="10"></textarea>',
    scope:{
      targetObject: '=',
      targetInputKey: '@',
      targetOutputKey: '@'
    },
    restrict: 'E',
    link: function($scope, $element, $attributes){

      /* Private variables */

      var targetObject = $scope.targetObject;
      var targetInputKey = $scope.targetInputKey;
      var targetOutputKey = $scope.targetOutputKey;

      /* Initiate the element */

      $($element).children('.weMarkdownEditor').markdown({
        autofocus: false,
        saveable: true,
        fullscreen: false,
        hiddenButtons: "cmdImage cmdUrl cmdHeading cmdList cmdList0 cmdCode cmdQuote cmdPreview",
        /* Make sure the model gets updated when the editor value changes */
        onChange: function(e){
          $scope.$apply(function(){
            targetObject[targetOutputKey] = marked(e.getContent(), {
              sanitize: true
            });
          });
        }
      });

      /* Make sure the editor output gets updated when the model value changes */

      $scope.$watch('targetObject[targetInputKey]', function(newVal, oldVal){
        if(newVal){
          targetObject[targetOutputKey] = marked(targetObject[targetInputKey], {
            sanitize: true
          });
        }
      });
    }
  };
}]);
