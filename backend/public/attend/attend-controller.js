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

  self.eventDetails = {
    name: "My Event"
  };

  self.participantDetails = {

  };

  self.message = "";

  /* Private functions */

  function commitToBackend(message){
    /*WeBackendService.updateParticipantDetails(self.entry, attending, '', function(result){
      console.log(result);
      self.message = message;
      self.lockdown.status = true;
    });*/
    self.message = message;
    self.lockdown.status = true;
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

  /*WeBackendService.getEventDetails(eventId, '', function(result){
    self.eventDetails = result.eventDetails;
  }).then(function(){
    WeBackendService.getParticipantDetails(participantId, '', function(result){
      self.participantDetails = result.participantDetails;
      WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;
    });
  });*/

  WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;
  console.log(eventId, participantId);

}]);
