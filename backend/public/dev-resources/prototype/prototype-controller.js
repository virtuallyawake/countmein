weApp.controller('WePrototypeController', ['WeMainService', 'WE_CONSTANTS', '$uibModal', 'ngToast', '$sce', '$interval', 'Upload', function(WeMainService, WE_CONSTANTS, $uibModal, ngToast, $sce, $interval, Upload){

  /* Private variables */

  var self = this;

  /* For the table example */
  var lastNameSelectOptions = [
      { id: null, name: "-- Kies optie --"},
      { id: "de Wit", name:"de Wit" },
      { id: "de Bruin", name: "de Bruin" },
      { id: "de Zwart", name: "de Zwart" },
      { id: "de Blauw", name: "de Blauw" }
    ];

  /* Private function */

  /* For the table example */
  function lastNameUrlFunction(row){
    return 'https://www.' + row.last_name.replace(' ', '-') + '.com?phone=' + row.telephone;
  }

  /* Public variables */

  /* For the table example */
  self.tableData = {
    options: {
      title: "My Table",
      globalSearch: true,
      scrollable: false,
      pagination: true,
      editEnabled: true,
      deleteEnabled: true,
      selectable: true,
      itemsByPage: 5,
      displayedPages: 2
    },
    keys: {
      first_name: { heading: "Voornaam", styling: "width:20%;", sorting: false, colEditType: "string", url: false },
      last_name: { heading: "Achternaam", styling: "width:20%;", sorting: false, colEditType: "select", selectOptions: lastNameSelectOptions, url: true, urlFunction: lastNameUrlFunction},
      telephone: { heading: "Telefoon", styling: "width:20%;", sorting: false, colEditType: "string", url: false },
      email: { heading: "E-mail", styling: "width:20%;", sorting: true, colEditType: "email", url: false }
    },
    data: [
      { id: 0, first_name: "Jan", last_name: "de Wit", telephone: "0123456789", email: "jan@dewit.nl" },
      { id: 1, first_name: "Dirk", last_name: "de Bruin", telephone: "0123456789", email: "dirk@debruin.nl" },
      { id: 2, first_name: "Truus", last_name: "de Zwart", telephone: "0123456789", email: "truus@dezwart.nl" },
      { id: 3, first_name: "Kees", last_name: "de Blauw", telephone: "0123456789", email: "kees@deblauw.nl" },
      { id: 4, first_name: "Evert", last_name: "de Wit", telephone: "0123456789", email: "evert@dewit.nl" },
      { id: 5, first_name: "Emma", last_name: "de Bruin", telephone: "0123456789", email: "emma@debruin.nl" },
      { id: 6, first_name: "Laurens", last_name: "de Zwart", telephone: "0123456789", email: "laurens@dezwart.nl" },
      { id: 7, first_name: "Aart", last_name: "de Blauw", telephone: "0123456789", email: "aart@deblauw.nl" }
    ],
  };

  /* For the tabs example */
  var TAB_ONE = 0;
  var TAB_TWO = 1;
  var TAB_THREE = 2;
  var TAB_FOUR = 3;
  var TAB_FIVE = 4;
  self.activeTab = TAB_TWO;

  self.tabs = [
    { name: "First Tab", url: '#/dev-resources/prototype', active: TAB_ONE },
    { name: "Second Tab", url: '#/dev-resources/prototype', active: TAB_TWO },
    { name: "Third Tab", url: '#/dev-resources/prototype', active: TAB_THREE },
    { name: "Fourth Tab", url: '#/dev-resources/prototype', active: TAB_FOUR },
    { name: "Fifth Tab", url: '#/dev-resources/prototype', active: TAB_FIVE }
  ];

  /* For the grid example */
  self.myData = [
    {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }
  ];

  /* For the datepicker example*/
  self.dt = '';

  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  self.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  /* For the accordeon example */
  self.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };

  /* For the modal example*/
  self.item = "in";
  self.result = 'nothing yet';

  /* For the markdown example */
  self.markdownInput = "I can be either **bold** or _italic_.";
  self.markdownOutput = "";

  /* Public functions */

  /* For the table example */
  self.saveEntry = function(entry, callback){
    angular.copy(entry, self.tableData.data[WeToolService.findWithAttr(self.tableData.data, 'id', entry.id)]);
    callback();
  };

  self.deleteEntry = function(entry, callback){
    var index = WeToolService.findWithAttr(self.tableData.data, 'id', entry.id);
    if (index > -1) {
      self.tableData.data.splice(index, 1);
    }
    callback();
  };

  /* For the modal example */
  self.openModal = function(){
    var modalInstance = $uibModal.open({
      template: '<div class="modal-header">' +
                  '<h3 class="modal-title">I\'m a modal!</h3>' +
                '</div>' +
                '<div class="modal-body">' +
                  '<p>I am the body</p>' +
                  '<p>This was passed to the modal: {{item}}' +
                  '<p>This will be returned by the modal: {{result}}' +
                '</div>' +
                '<div class="modal-footer">' +
                  '<button class="btn btn-primary" type="button" ng-click="ok()">OK</button>' +
                '</div>',
      controller: ['$scope', '$uibModalInstance', 'item', function($scope, $uibModalInstance, item){
        $scope.item = item;
        $scope.result = "out";

        $scope.ok = function(){
          $uibModalInstance.close($scope.result);
        };
      }],
      resolve: {
        item: function(){
          return self.item;
        }
      }
    });

    modalInstance.result.then(function(result){
      self.result = result;
    });
  }; /* End function openModal */

  /* For the toaster example */
  self.normalToast = function(msg){
    ngToast.info({
      content: msg,
      animation: 'fade',
      dismissButton: true
    });
  };

  self.successToast = function(msg){
    ngToast.success({
      content: msg,
      animation: 'fade',
      dismissButton: true
    });
  };

  self.warningToast = function(msg){
    ngToast.warning({
      content: msg,
      animation: 'fade',
      dismissButton: true
    });
  };

  self.dangerToast = function(msg){
    ngToast.danger({
      content: msg,
      animation: 'fade',
      dismissButton: true
    });
  };

  /* For the ng file upload example */
  self.upload = function(file) {
      Upload.upload({
          url: 'upload/url',
          data: {file: file}
      }).then(function (resp) {
          self.successToast('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
      }, function (resp) {
          self.warningToast('Error status: ' + resp.status);
      }, function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });
  };

  self.uploadFiles = function(files) {
    if (files && files.length) {
      for (var i = 0; i < files.length; i++) {
        self.upload(files[i]);
      }
    }
  };

  /* For the markdown example */
  self.allowHtml = function(html){
    return $sce.trustAsHtml(html);
  };

  /* Initiation */

  WeMainService.subview.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;

}]);
