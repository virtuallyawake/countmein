weApp.controller('WeExperimentController', ['WeMainService', 'WE_CONSTANTS', 'WeToolService', function(WeMainService, WE_CONSTANTS, WeToolService){

  /* Private variables */

  var self = this;

  var lastNameSelectOptions = [
    { id: null, name: "-- Kies optie --"},
    { id: "de Wit", name:"de Wit" },
    { id: "de Bruin", name: "de Bruin" },
    { id: "de Zwart", name: "de Zwart" },
    { id: "de Blauw", name: "de Blauw" }
  ];

  /* Private function */

  function lastNameUrlFunction(row){
    return 'https://www.' + row.last_name.replace(' ', '-') + '.com?phone=' + row.telephone;
  }

  /* Public variables */
  self.lockdown = {status: false};

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

  self.chartDataOptions = {
    width: 420,
    height: 300,
    descriptionXAxis: "I am x",
    descriptionYAxis: "I am y",
    customColor: "blue",
    watch: false
  };
  self.chartData = {
    units: [ "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
    data: [ 10, 40, 70, 30, 50, 90, 100, 30, 80, 20, 50, 90]
  };

  /* Public functions */

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

  /* Initiation */

  WeMainService.subview.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;

}]);
