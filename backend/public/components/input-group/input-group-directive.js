/* File: app/components/input-group/input-group-directive.js */

weApp.directive('weInputGroup', [function(){
  return{
    restrict: 'E',
    scope:{
      editMode: '@',
      keys: '=',
      source: '=',
      units: '@',
      lockdown: '=',
      lockdownKey: '@',
      model: '='
    },
    template:
    '<div class="row">' + /* The general row */

      '<div ng-repeat="(key, value) in keys" class="l-we-input-pair-wrapper {{units}}">' + /* Sets the col */

        '<div class="row">' + /* The 'row' inside the col that splits the col in two */

          /* Announce the value */
          '<div class="col-xs-6 text-right">' +
            '{{value.heading}} :&nbsp;' +
          '</div>' +

          '<div class="col-xs-6 text-left">' +
          
            /* Normal mode */
            '<span ng-if="editMode == \'false\'">' +
              /* Check if it's a link or not */
              '<span ng-if="value.url === false">' +
                '{{source[key]}}' +
              '</span>' +
              '<span ng-if="value.url === true">' +
                '<a href="{{value.urlFunction(source)}}">{{source[key]}}</a>' +
              '</span>' +
            '</span>' +

            /* Edit mode */
            '<span ng-if="editMode == \'true\'">' +

              /* If the column can't be edited */
              '<span ng-if="value.colEditType == \'notEditable\'">' +
                /* Check if it's a link or not */
                '<span ng-if="value.url === false">' +
                  '{{source[key]}}' +
                '</span>' +
                '<span ng-if="value.url === true">' +
                  '<a href="{{value.urlFunction(source)}}">{{source[key]}}</a>' +
                '</span>' +
              '</span>' +

              /* If the column can be edited, get the right input */
              '<input ng-disabled="lockdown[lockdownKey] === true" ng-if="value.colEditType == \'string\'" class="form-control" type="text" ng-model="model[key]" />' + /* Simple text */
              '<input ng-disabled="lockdown[lockdownKey] === true" ng-if="value.colEditType == \'number\'" class="form-control" type="number" ng-model="model[key]" />' + /* Simple text */
              '<input ng-disabled="lockdown[lockdownKey] === true" ng-if="value.colEditType == \'password\'" class="form-control" type="password" ng-model="model[key]" />' + /* Simple text */
              '<input ng-disabled="lockdown[lockdownKey] === true" ng-if="value.colEditType == \'email\'" class="form-control" type="email" ng-model="model[key]" />' + /* Simple text */
              '<select ng-disabled="lockdown[lockdownKey] === true" ng-if="value.colEditType == \'select\'" class="form-control" ng-model="model[key]" ng-options="name.id as name.name for name in value.selectOptions">' +
              '</select>' +
            '</span>' + /* End edit mode */
          '</div>' + /* End right side div */
        '</div>' + /* End row within col */
      '</div>' +/* End col */
    '</div>' /* End row */
  };
}]);
