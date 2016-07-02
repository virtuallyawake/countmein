/* File: app/dashboard/dashboard-controller.js */

weApp.controller('WeDashboardController', ['WeMainService', 'WE_CONSTANTS', 'WeToolService', 'WeBackendService', function(WeMainService, WE_CONSTANTS, WeToolService, WeBackendService){
  /* Private variables */

  var self = this;
  var authToken = WeMainService.user.token;

  /* Public variables */

  self.eventDetails = {
    organiser: {
      firstName: null,
      lastName: null,
      email: null
    },
    name: null,
    date: null,
    description: null,
    participants: []
  };
  self.newParticipant = {
    firstName: null,
    lastName: null,
    email: null,
    attending: WE_CONSTANTS.ATTENDING_STATUS.UNDECIDED
  };
  self.lockdown = { status: false };
  self.myObj = {
    textEditor: '',
    textOutput: ''
  };

  self.tableData = {
    options: {
      title: "Participants",
      globalSearch: true,
      scrollable: false,
      pagination: true,
      editEnabled: true,
      deleteEnabled: true,
      selectable: false,
      itemsByPage: 5,
      displayedPages: 4
    },
    keys: {
      firstName: { heading: "First name", styling: "width:26%;", sorting: true, colEditType: "string", url: false },
      lastName: { heading: "Last name", styling: "width:26%;", sorting: true, colEditType: "string", url: false},
      email: { heading: "email", styling: "width:26%;", sorting: true, colEditType: "email", url: false },
    }
  };

  self.LOCAL_CONSTANTS = {
    STATES: {
      FORM: 0,
      SUCCESS: 1,
      ERROR: 2
    }
  };

  self.state = self.LOCAL_CONSTANTS.STATES.FORM;

  /* Public functions */

  self.addParticipant = function(){
    var commit;

    commit = angular.copy(self.newParticipant);
    self.eventDetails.participants.push(commit);

    /* Reset the new participant values */
    self.newParticipant.firstName = null;
    self.newParticipant.lastName = null;
    self.newParticipant.email = null;
  };

  self.updateEntry = function(entry, callback){
    var index = WeToolService.findWithAttr(self.eventDetails.participants, 'email', entry.email);

    angular.copy(entry, self.eventDetails.participants[index]);
    console.log(entry);
    callback();
  };

  self.deleteEntry = function(entry, callback){
    var index = WeToolService.findWithAttr(self.eventDetails.participants, 'email', entry.email);
    self.eventDetails.participants.splice(index, 1);
    console.log(entry);
    callback();
  };

  self.checkParticipantFields = function(){
    if( self.newParticipant.firstName !== null && self.newParticipant.firstName !== '' &&
        self.newParticipant.lastName !== null && self.newParticipant.lastName !== '' &&
        self.newParticipant.email !== null && self.newParticipant.email !== '')
      return false;

    return true;
  };

  self.checkAllFields = function(){
    if( self.eventDetails.organiser.firstName !== null && self.eventDetails.organiser.firstName !== '' &&
        self.eventDetails.organiser.lastName !== null && self.eventDetails.organiser.lastName !== '' &&
        self.eventDetails.organiser.email !== null && self.eventDetails.organiser.email !== '' &&
        self.eventDetails.name !== null && self.eventDetails.name !== '' &&
        self.eventDetails.date !== null && self.eventDetails.date !== '' && self.eventDetails.date !== 0 &&
        self.eventDetails.description !== null && self.eventDetails.description !== '' &&
        self.eventDetails.participants.length > 0)
      return false;

    return true;
  };

  self.processInvitations = function(){
    self.lockdown.status = true;
    console.log("Sending to the backend:");
    console.log(self.eventDetails);
    WeBackendService.commitToBackend(self.eventDetails, function(result){
      console.log(result);
      self.state = self.LOCAL_CONSTANTS.STATES.SUCCESS;
    });
  };

  /* Initiation */

  WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;

}]);
