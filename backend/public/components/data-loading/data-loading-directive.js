/* File: app/components/we-data-loading/we-data-loading-directives.js */

weApp.directive('weDataLoading', [function(){
  return {
    template: '<div class="l-we-data-loading text-center">' +
                '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>' +
                '<p>Data wordt opgehaald...</p>' +
              '</div>',
    //restrict: 'E'
  };
}]);
