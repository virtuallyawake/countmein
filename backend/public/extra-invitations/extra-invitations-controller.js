/* File: app/dashboard/dashboard-controller.js */

weApp.controller('WeExtraInvitationsController', ['WeMainService', 'WE_CONSTANTS', 'WeToolService', 'WeBackendService', '$stateParams', 'ngToast', function(WeMainService, WE_CONSTANTS, WeToolService, WeBackendService, $stateParams, ngToast){

  /* Private variables */

  var self = this;
  var authToken = WeMainService.user.token;
  var attending;
  var eventId = $stateParams.eventId;
  var ATTENDING_STATUS = WE_CONSTANTS.ATTENDING_STATUS;

  /* Public variables */

  self.eventId = eventId;
  self.lockdown = { status: false };
  self.eventDetails = {
    organiser: {
      id: null,
      firstName: null,
      lastName: null,
      email: null
    },
    name: null,
    date: null,
    description: null,
    participants: [],
    newParticipants: []
  };
  self.newParticipant = {
    firstName: null,
    lastName: null,
    email: null,
    attending: WE_CONSTANTS.ATTENDING_STATUS.UNDECIDED
  };

  self.message = "";

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
      firstName: { heading: "First name", styling: "width:26%;", sorting: true, colEditType: "string", type: "plain" },
      lastName: { heading: "Last name", styling: "width:26%;", sorting: true, colEditType: "string", type: "plain"},
      email: { heading: "email", styling: "width:26%;", sorting: true, colEditType: "email", type: "plain" },
    }
  };

  /* Private functions */

  /* Public functions */

  self.addParticipant = function(){
    var commit;

    commit = angular.copy(self.newParticipant);
    self.eventDetails.newParticipants.push(commit);

    /* Reset the new participant values */
    self.newParticipant.firstName = null;
    self.newParticipant.lastName = null;
    self.newParticipant.email = null;
  };

  self.updateEntry = function(entry, callback){
    var index = WeToolService.findWithAttr(self.eventDetails.newParticipants, 'email', entry.email);

    angular.copy(entry, self.eventDetails.newParticipants[index]);
    console.log(entry);
    callback();
  };

  self.deleteEntry = function(entry, callback){
    var index = WeToolService.findWithAttr(self.eventDetails.newParticipants, 'email', entry.email);
    self.eventDetails.newParticipants.splice(index, 1);
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
        self.eventDetails.newParticipants.length > 0)
      return false;

    return true;
  };

  self.processInvitations = function(){
    self.lockdown.status = true;
    console.log("Sending to the backend:");
    console.log(self.eventDetails);
    WeBackendService.addParticipants(self.eventDetails.newParticipants, eventId, function(result){
      self.lockdown.status = false;
      self.eventDetails.newParticipants = [];
      if(result !== false){
        ngToast.success({
          content: "Your list has been updated",
          animation: 'fade',
          dismissButton: true
        });
      }
      else {
        ngToast.error({
          content: "Something went wrong. Try again later.",
          animation: 'fade',
          dismissButton: true
        });
      }
    });
  };

  /* Initiation */

  WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;

}]);
