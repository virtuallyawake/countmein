weApp.directive('weDatepicker', [function(){
  return{
    template: '<p class="input-group">' +
                '<input type="text"' +
                  'class="form-control"' +
                  'uib-datepicker-popup="{{format}}"' +
                  'ng-model="targetObject[targetModel]"' +
                  'is-open="datepicker.opened"' +
                  'datepicker-options="weDateOptions"' +
                  'ng-required="true"' +
                  'close-text="Close"' +
                  'alt-input-formats="altInputFormats" />' +
                '<span class="input-group-btn">' +
                  '<button type="button" class="btn btn-default" ng-click="openDatepicker()"><i class="fa fa-calendar" aria-hidden="true"></i></button>' +
                '</span>' +
              '</p>',
    scope: {
      targetObject: '=',
      targetModel: '@',
      weDateOptions: '='
    },
    link: function(scope, element, attrs){

      /* Public variables */

      scope.datepicker = { opened: false };
      scope.formats = ['dd-MM-yyyy', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      scope.format = scope.formats[0];
      scope.altInputFormats = ['M!/d!/yyyy'];

      /* Public functions */

      scope.openDatepicker = function(){
        scope.datepicker.opened = true;
      };

    }
  };
}]);
