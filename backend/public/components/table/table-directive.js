/* File: app/components/table/table-directive.js */

weApp.directive('weTable', ['WeToolService', '$interval', function(WeToolService, $interval){
  return {
    template:
      '<div class="we-table-wrapper" >' +
        '<div st-table="displayedCollection" st-safe-src="targetObject">' +

          /* Smartphone / tablet version */
          '<div class="we-table-xs we-table-sm visible-xs visible-sm">' +

            /* Table */
            '<table class="table table-striped">' +

              '<thead>' +

                /* Heading */
                '<tr ng-if="options.title !== \'\' ">' +
                  '<th>' +
                    '{{options.title}}' +
                  '</th>' +
                '</tr>' +

                /* Search */
                '<tr>' +
                  '<th>' +
                    '<div ng-if="options.globalSearch === true" class="row">'+
                      '<div class="col-xs-12">' +
                         '<input ng-disabled="lockdown[lockdownKey] === true" st-search placeholder="Zoek..." class="input-sm form-control" type="search"/>' +
                       '</div>' +
                    '</div>' +
                  '</th>' +
                '</tr>' +

              '</thead>' +

              /* Body */
              '<tbody>' +
                '<tr ng-repeat="row in displayedCollection track by $index">' +
                  '<td>' +
                    '<we-input-group  edit-mode="{{targetObject.indexOf(row) == rowBeingEdited}}" ' +
                                      'keys="keys" ' +
                                      'source="row" ' +
                                      'units="col-xs-12" ' +
                                      'lockdown="lockdown" ' +
                                      'lockdown-key="lockdownKey" ' +
                                      'model="editingRow"></we-input-group>' +

                    /* Buttons */
                    '<p ng-if="options.editEnabled || options.deleteEnabled" class="l-we-table-mobile-buttons-wrapper text-center">' +
                      '<span ng-if="targetObject.indexOf(row) != rowBeingEdited">' +
                        '<button ng-disabled="lockdown[lockdownKey] === true" ng-if="options.editEnabled" class="btn btn-primary l-we-table-btn" ng-click="editRow(row)">Edit</button>' +
                        '<button ng-disabled="lockdown[lockdownKey] === true" ng-if="options.deleteEnabled" class="btn btn-danger l-we-table-btn" ng-click="deleteRow(row)">Delete</button>' +
                      '</span>' +
                      '<span ng-if="targetObject.indexOf(row) == rowBeingEdited">' +
                        '<button ng-disabled="lockdown[lockdownKey] === true" class="btn btn-primary l-we-table-btn" ng-click="saveRow(editingRow)">Save</button>' +
                        '<button ng-disabled="lockdown[lockdownKey] === true" class="btn btn-primary l-we-table-btn" ng-click="cancelEdit()">Undo</button>' +
                      '</span>' +
                    '</p>' +

                  '</td>' +
                '</tr>' +
              '</tbody>' +

            '</table>' +

            /* Footer */
            '<div ng-if="options.pagination" class="text-center">' +
              '<div st-pagination="" st-items-by-page="options.itemsByPage" st-displayed-pages="options.displayedPages"></div>' +
            '</div>' +

          '</div>' +

          /* Laptop / desktop version */
          '<div class="we-table-md we-table-lg visible-md visible-lg">' +
            '<div class="we-table-body-wrapper {{options.scrollable === true ? \'we-table-scrollable\' : \'\' }}">' +
              '<table class="table table-striped">' +

                /* Heading */
                '<thead>' +
                  '<tr>' +
                    '<th ng-if="options.selectable === true">' +
                    '</th>' +
                    '<th ng-repeat="(key, value) in keys" st-class-ascent="we-table-sort-ascent" st-class-descent="we-table-sort-descent" ng-class="{\'we-table-sortable-heading\': value.sorting === true }" st-sort="{{ value.sorting === true ? key : null }}" style="{{value.styling}}">' +
                      '{{value.heading}}' +
                    '</th>' +
                    '<th ng-if="options.editEnbled || options.deleteEnabled"></th>' +
                  '</tr>' +
                  '<tr ng-if="options.globalSearch === true">' +
                		'<th colspan="999">' + /* Trick to make the columns span the width of the table, regardless of the number of columns */
                      '<div class="row">'+
                        '<div class="col-sm-6 col-md-4">' +
                			     '<input ng-disabled="lockdown[lockdownKey] === true" st-search placeholder="Zoek..." class="input-sm form-control" type="search"/>' +
                         '</div>' +
                      '</div>' +
                		'</th>' +
                	'</tr>' +
                '</thead>' +

                /* Body */
                '<tbody>' +
                  '<tr ng-repeat="row in displayedCollection track by $index">' +

                    /* Checkbox if so desired */
                    '<td ng-if="options.selectable === true">' +
                      '<input type="checkbox" ng-model="checks[targetObject.indexOf(row)]" />' +
                    '</td>' +

                    /* Normal mode */
                    '<td ng-if="targetObject.indexOf(row) != rowBeingEdited" ng-repeat="(key, value) in keys" style="{{value.stying}}">' +
                      /* Check if it's a link or not */
                      '<span ng-if="value.url === false">' +
                        '{{row[key]}}' +
                      '</span>' +
                      '<span ng-if="value.url === true">' +
                        '<a href="{{value.urlFunction(row)}}">{{row[key]}}</a>' +
                      '</span>' +
                    '</td>' +

                    /* Edit mode */
                    '<td ng-if="targetObject.indexOf(row) == rowBeingEdited" ng-repeat="(key, value) in keys" style="{{value.styling}}">' +
                      /* Get the right input */
                      '<input ng-disabled="lockdown[lockdownKey] === true" ng-if="value.colEditType == \'string\'" class="form-control" type="text" ng-model="editingRow[key]" />' + /* Simple text */
                      '<input ng-disabled="lockdown[lockdownKey] === true" ng-if="value.colEditType == \'number\'" class="form-control" type="number" ng-model="editingRow[key]" />' + /* Simple text */
                      '<input ng-disabled="lockdown[lockdownKey] === true" ng-if="value.colEditType == \'password\'" class="form-control" type="password" ng-model="editingRow[key]" />' + /* Simple text */
                      '<input ng-disabled="lockdown[lockdownKey] === true" ng-if="value.colEditType == \'email\'" class="form-control" type="email" ng-model="editingRow[key]" />' + /* Simple text */
                      '<select ng-disabled="lockdown[lockdownKey] === true" ng-if="value.colEditType == \'select\'" class="form-control" ng-model=editingRow[key] ng-options="name.id as name.name for name in value.selectOptions">' +
                        '<!--<option value="">{{selectPlaceholder}}</option>-->' +
                      '</select>' +
                      /* If the column can't be edited */
                      '<span ng-if="value.colEditType == \'notEditable\'">' +
                        /* Check if it's a link or not */
                        '<span ng-if="value.url === false">' +
                          '{{row[key]}}' +
                        '</span>' +
                        '<span ng-if="value.url === false">' +
                          '<a href="{{value.urlFunction(row)}}">{{row[key]}}</a>' +
                        '</span>' +
                      '</span>' +
                    '</td>' +

                    /* Last optional column for edit, delete, save and undo buttons */
                    '<td ng-if="options.editEnabled || options.deleteEnabled" class="text-right">' +
                      '<span ng-if="targetObject.indexOf(row) != rowBeingEdited">' +
                        '<button ng-disabled="lockdown[lockdownKey] === true" ng-if="options.editEnabled" class="btn btn-primary l-we-table-btn" ng-click="editRow(row)">Edit</button>' +
                        '<button ng-disabled="lockdown[lockdownKey] === true" ng-if="options.deleteEnabled" class="btn btn-danger l-we-table-btn" ng-click="deleteRow(row)">Delete</button>' +
                      '</span>' +
                      '<span ng-if="targetObject.indexOf(row) == rowBeingEdited">' +
                        '<button ng-disabled="lockdown[lockdownKey] === true" class="btn btn-primary l-we-table-btn" ng-click="saveRow(editingRow)">Save</button>' +
                        '<button ng-disabled="lockdown[lockdownKey] === true" class="btn btn-primary l-we-table-btn" ng-click="cancelEdit()">Undo</button>' +
                      '</span>' +
                    '</td>' +
                	'</tr>' +
              	'</tbody>' +
              '</table>' +
            '</div>' + /* End .we-table-body-wrapper */

            /* Footer */
            '<div ng-if="options.pagination" class="text-center">' +
              '<div st-pagination="" st-items-by-page="options.itemsByPage" st-displayed-pages="options.displayedPages"></div>' +
            '</div>' +
          '</div>' + /* End div containing classes we-table-md we-table-lg */
        '</div>' + /* End div containing st-table="displayedCollection" st-safe-src="targetObject" */
      '</div>', /* End we-table-wrapper */
    restrict: 'E',
    scope: {
      targetObject: '=',
      options: '=',
      keys: '=',
      lockdown: '=',
      lockdownKey: '@',
      saveObject: '=',
      deleteObject: '=',
      saveFunction: '@',
      deleteFunction: '@'
    },
    link: function(scope, element, attrs){

      scope.rowBeingEdited = -1;
      scope.editingRow = {};
      scope.checks = [];

      scope.editRow = function(row){
        scope.editingRow = angular.copy(row);
        scope.rowBeingEdited = scope.targetObject.indexOf(row);
      };

      scope.cancelEdit = function(){
        scope.rowBeingEdited = -1;
      };

      scope.saveRow = function(row){
        scope.lockdown[scope.lockdownKey] = true;
        scope.saveObject[scope.saveFunction](row, function(){
          scope.cancelEdit();
          scope.lockdown[scope.lockdownKey] = false;
        });
      };

      scope.deleteRow = function(row){
        scope.lockdown[scope.lockdownKey] = true;
        scope.deleteObject[scope.deleteFunction](row, function(){
          scope.lockdown[scope.lockdownKey] = false;
        });
      };

    },
  };
}]);
