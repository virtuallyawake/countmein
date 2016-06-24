/* File: app/core/js/module.js */

var weApp = angular.module("weApp", ['ngSanitize', 'ngAnimate', 'smart-table', 'ui.grid', 'ui.bootstrap', 'ui.router', 'ngFileUpload', 'ngToast']);

/* File: app/core/js/constants.js */

weApp.constant("WE_CONSTANTS", (function(){

  /* These are defined privately first, because they are required lateron in the public declaraions */

  var BACKEND_BASEPATH = 'http://www.devwe.dev/';

  var PAGES = {

    NOT_ALLOWED: { ID: 999, TITLE: "Niet toegestaan" },

    DASHBOARD: { ID: 0, TITLE: "Dashboard" },

    DEFAULT: { ID: 0, TITLE: "Dashboard" }
  };

  var SUBVIEWS = {
  };

  var DEFAULT_RESULT = { STATUS_KEY: 'status', STATUS_SUCCESS: 'success', DATA_KEY: 'data' };
  var RESULT_NO_KEY = { STATUS_KEY: null, STATUS_SUCCESS: '', DATA_KEY: '' };

  return {

    /* Toggle debug mode */
    DEBUG: {
      BACKEND: false,
      ROUTES: false
    },

    /* Set the basepath */
    BASEPATH: 'http://www.devwe.dev/',

    /* These are all the backend call configurations */
    BACKEND: {

    },

    /* Routing configurations */
    STATES: [
      /* General */
      { NAME: 'dashboard', STATE_CONFIG: [ '/dashboard', 'dashboard/dashboard.html', 'WeDashboardController as weDashboardCtrl', PAGES.DASHBOARD.ID, PAGES.DASHBOARD.TITLE, false, 'page' ] },
    ],

    /* This is a collection of what right is required for what (sub)view */
    RIGHTS: [
    ],

    /* These are all the navigational labels */
    PAGES: PAGES,

    /* These are all the sub-page navigational labels */
    SUBVIEWS: SUBVIEWS,

    /* These indicate the possible states a loading page can be in */
    LOADING_STATES: {
      LOADING: 0,
      DONE: 1,
      ERROR: 2
    },

    /* These indicate content types */
    CONTENT_TYPES: {
      LINK: 0,
      STRING: 1,
      INTEGER: 2,
      BOOLEAN: 3,
      FLOAT: 4
    },
  };
})());

/* File: app/main/main-service.js */

weApp.factory('WeMainService', ['WE_CONSTANTS', function(WE_CONSTANTS){

  function StateClass(id, initialLoadingState, title, promise){
    var self = this;

    self.id = id;
    self.initialLoadingState = initialLoadingState;
    self.title = title;
  }

  return {
    isLoaded: false,

    page: new StateClass(WE_CONSTANTS.PAGES.DEFAULT, WE_CONSTANTS.LOADING_STATES.DONE, '', null),
    subview: new StateClass(null, WE_CONSTANTS.LOADING_STATES.DONE, '', null),

    user: {},
    promises: {
      user: null
    }
  };

}]);

/* File: app/core/js/run.js */

weApp.run(['WeMainService', 'WeBackendService', '$q', '$window', 'WE_CONSTANTS', '$rootScope', '$state', function(WeMainService, WeBackendService, $q, $window, WE_CONSTANTS, $rootScope, $state){

  /* Private variables */

  var BASEPATH = WE_CONSTANTS.BASEPATH;
  var url = $window.location.href;

  /* Event handlers */

  /* Initiation */

  WeMainService.isLoaded = true;

}]);

/* File: app/core/js/routes.js */

weApp.config(['$stateProvider', '$urlRouterProvider', 'WE_CONSTANTS', function($stateProvider, $urlRouterProvider, WE_CONSTANTS){

  /* Private variables */

  var STATES = WE_CONSTANTS.STATES;
  /* Private functions */

  function stateConfig(url, templateUrl, controller, id, title, abstractValue, targetObjectName){
    return {
      abstract: abstractValue,
      url: url,
      templateUrl: templateUrl,
      controller: controller,
      resolve: {
        userPromise: ['WeMainService', function(WeMainService){
          WeMainService[targetObjectName].id = id;
          WeMainService[targetObjectName].title = title;
          WeMainService[targetObjectName].initialLoadingState = WE_CONSTANTS.LOADING_STATES.LOADING;
        }],
      }
    };
  }

  /* Initiation */

  $urlRouterProvider.otherwise("/dashboard");

  for(var i = 0; i < STATES.length; i++){
      $stateProvider.state(STATES[i].NAME, stateConfig.apply(this, STATES[i].STATE_CONFIG));
  }

}]);

/* File: app/core/js/backend-abstract-service.js */

weApp.factory('WeBackendService', ['$http', 'WE_CONSTANTS', function($http, WE_CONSTANTS){

  /* Private variables */

  var BACKEND = WE_CONSTANTS.BACKEND;

  var backendFunctions = {};

  /* Private functions */

  function backendCall(requestedUrl, parameters, resultNames, callback){

    if(WE_CONSTANTS.DEBUG.BACKEND){
      console.log("POST arguments for backend request '" + requestedUrl + "':");
      console.log(parameters);
    }

    return $http.post(requestedUrl, $.param(parameters), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function(result){
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
        parameters[backend.POST[j]] = arguments[j];
      }

      return backendCall(backend.URL, parameters, backend.RESULT, callback);
    };
  }

  /* Compile the backend calls */

  for(var key in BACKEND){
    backendFunctions[BACKEND[key].NAME] = createFunction(BACKEND[key]);
  }

  /* Return the backend calls object */

  return backendFunctions;

}]);

/* File: app/main/main-controller.js */

weApp.controller("WeMainCtrl", ['WeMainService', 'WeBackendService', '$window', 'WE_CONSTANTS', function(WeMainService, WeBackendService, $window, WE_CONSTANTS){

  /* Private variables */

  var self = this;
  var BASEPATH = WE_CONSTANTS.BASEPATH;

  /* Public variables */

  self.mainService = WeMainService;
  self.WE_PAGES = WE_CONSTANTS.PAGES;
  self.LOADING_STATES = WE_CONSTANTS.LOADING_STATES;
  self.overlayMessage = "App wordt geladen...";

  /* Private functions */

  /* Public functions */

  self.logOut = function(){
    self.mainService.isLoaded = false;
    self.overlayMessage = "App wordt afgesloten...";
    WeBackendService.logOut(function(result){
      $window.location.href = BASEPATH + 'architecture/prototype2/app/signin';
    });
  };

  /* Event handlers */

  /* Initiation */

}]);

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

/* File: app/components/tabs/tabs-directive.js */

weApp.directive('weTabs', [function(){
  return {
    template:
    '<div class="l-we-tabs">' +
      /* Dropdown menu for small devices */
      '<div class="visible-xs dropdown">' +
        '<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu-{{name}}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
          '{{name}}' +
          '<span class="caret"></span>' +
        '</button>' +
        '<ul class="dropdown-menu" aria-labelledby="dropdownMenu-{{name}}">' +
          '<li ng-repeat="tab in tabs"><a ng-click="activeObject[activeKey] = tab.active" href="{{tab.url}}">{{tab.name}}</a></li>' +
        '</ul>' +
      '</div>' +
      /* Tabs for larger devices */
      '<ul class="visible-sm visible-md visible-lg nav nav-tabs">' +
        '<li ng-repeat="tab in tabs track by $index" role="presentation" ng-class="{active: activeObject[activeKey] == tab.active}">' +
          '<a href="{{tab.url}}" ng-click="activeObject[activeKey] = tab.active">' +
            '{{tab.name}}' +
          '</a>' +
        '</li>' +
      '</ul>' +
    '</div>',
    scope: {
      name: '@',
      tabs: '=',
      activeObject: '=',
      activeKey: '@',
    },
  };
}]);

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
                    '<td ng-if="options.editEnabled || options.deleteEnabled">' +
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

/* File: app/components/d3-lines/d3-lines-directive.js */

weApp.directive('weD3Lines', [function(){
  return{
    restrict: 'EA',
    scope: {
      options: '=',
      data: '='
    },
    link: function(scope, elem, attrs){

      /* Private variables */

      var margin = {
        top: 20,
        right:20,
        bottom:30,
        left:40
      };

      var width = scope.options.width - margin.left - margin.right;
      var height = scope.options.height - margin.top - margin.bottom;
      var svg = d3.select(elem[0])
                  .append("svg")
                  .attr('width', width + margin.left + margin.right)
                  .attr('height', height + margin.left + margin.right);
      var chart = svg.append('g')
                    .attr('transform',
                      "translate(" + margin.left + "," + margin.top + ")");
      var xScale = d3.scale.linear()
                    .range([0, width]);
      var yScale = d3.scale.linear()
                    .range([height, 0]);
      var xAxis, yAxis;
      var data = scope.data.data;
      var units = scope.data.units;
      var descriptionXAxis = scope.options.descriptionXAxis;
      var descriptionYAxis = scope.options.descriptionYAxis;
      var customColor = scope.options.customColor;

      /* Private functions */

      function drawChart()
      {
        /* Private variables */

        /* First, clear the field. */
        svg.selectAll('line').remove();
        svg.selectAll('path').remove();
        svg.selectAll('text').remove();

        /* Next, perform the calculations */
        yScale.domain([
          0,
          d3.max(data) * 1.02 /* Give it some margin */
        ]).nice();

        xScale.domain([
        0, units.length - 1
        ]).nice();

        yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient('left')
                  .ticks(10)
                  .innerTickSize(-width)
                  /*.outerTickSize(-width)*/
                  .tickPadding(10);

        xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient('bottom')
                  .ticks(units.length - 1)
                  /*.outerTickSize(-height)*/
                  .tickFormat(function(d){
                    return units[d];
                  });

        /* Then, draw the framework of the chart */
        chart.append('g')
            .attr('class', 'we-chart-axis we-bottom-text')
            .attr('transform', 'translate(0, ' + height + ')')
            .call(xAxis)
          .append('text')
            .attr('x', width)
            .attr('y', -6)
            .style('text-anchor', 'end')
            .text(descriptionXAxis);

        chart.append('g')
            .attr('class', 'we-chart-axis')
            .call(yAxis)
          .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71rem')
            .style('text-anchor', 'end')
            .text(descriptionYAxis);

        /* Finally, draw the data */
        for(var i = 0; i < data.length; i++)
        {
          if(i < data.length - 1){
            chart.append("line")
              .attr('x1', xScale(i))
              .attr('y1', yScale(data[i]))
              .attr('x2', xScale(i + 1))
              .attr('y2', yScale(data[i + 1]))
              .style('stroke', customColor);
          }

          chart.append('circle')
            .attr("cx", xScale(i))
            .attr("cy", yScale(data[i]))
            .attr("r", 3.5)
            .style("fill", "white")
            .style("stroke", customColor);
        }
      }

      /* Event handlers */

      if(scope.options.watch === true){
        scope.$watch('data.data', function(){
          drawChart();
        });
      }

      /* Initiation */

      drawChart();

    }
  };

}]);

/* File: app/dashboard/dashboard-controller.js */

weApp.controller('WeDashboardController', ['WeMainService', 'WE_CONSTANTS', function(WeMainService, WE_CONSTANTS){
  /* Private variables */

  var self = this;
  var authToken = WeMainService.user.token;

  /* Public variables */

  self.user = WeMainService.user;
  self.lockdown = { status: false };
  self.myObj = {
    textEditor: '',
    textOutput: ''
  };

  /* Initiation */

  WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;
}]);
