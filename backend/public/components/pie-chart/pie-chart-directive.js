/* File: app/components/pie-chart/pie-chart-directive.js */

weApp.directive("wePieChart", ["$timeout", function($timeout){
  return {
    scope: {
      distribution: "=",
      canvasId: "@"
    },
    template: '<div style="width:100%"><canvas id="{{canvasId}}" /></div>',
    link: function(scope, element, attrs){

      /* Timeout is needed for the id to render */
      $timeout(function(){
        var context = document.getElementById(scope.canvasId).getContext('2d');
        var skillsChart = new Chart(context, scope.distribution);
      }, 0);
    }
  };
}]);
