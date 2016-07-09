/* File: app/dashboard/dashboard-controller.js */

weApp.controller('WeAttendController', ['WeMainService', 'WE_CONSTANTS', 'WeToolService', 'WeBackendService', '$stateParams', function(WeMainService, WE_CONSTANTS, WeToolService, WeBackendService, $stateParams){
  /* Private variables */

  var self = this;
  var authToken = WeMainService.user.token;
  var attending;
  var eventId = $stateParams.eventId;
  var participantId = $stateParams.participantId;

  /* Public variables */

  self.lockdown = { status: false };

  self.eventDetails = {};

  self.participantDetails = {
    attending: null
  };

  self.message = "";

  /* Private functions */

  function commitToBackend(message){
    self.lockdown.status = true;
    WeBackendService.updateParticipantStatus(self.participantDetails.attending, eventId + '/' + participantId, function(result){
      console.log(result);

      if(result !== false)
      {
        self.message = message;
      }
      else {
        self.message = "Oops, something went wrong. Please try again.";
      }

      self.lockdown.status = false;
    });
  }

  /* Public functions */

  self.yes = function(){
    self.lockdown.status = true;
    self.participantDetails.attending = WE_CONSTANTS.ATTENDING_STATUS.YES;
    commitToBackend("Great! See you there!");
  };

  self.no = function(){
    self.lockdown.status = true;
    self.participantDetails.attending = WE_CONSTANTS.ATTENDING_STATUS.NO;
    commitToBackend("Too bad. We'll notify the organiser.");
  };

  /* Initiation */

  WeBackendService.getParticipantStatus(eventId + '/' + participantId, function(result){
    if(result !== false)
    {
      self.participantDetails = result;
      WeMainService.getEventDetails(eventId, function(result){
        self.eventDetails = result;
        WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;
      });
    }
    else {
      WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.ERROR;
    }
  });

}]);
