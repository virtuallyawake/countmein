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
