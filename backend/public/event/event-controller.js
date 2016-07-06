/* File: app/dashboard/dashboard-controller.js */

weApp.controller('WeEventController', ['WeMainService', 'WE_CONSTANTS', 'WeToolService', 'WeBackendService', '$stateParams', '$location', function(WeMainService, WE_CONSTANTS, WeToolService, WeBackendService, $stateParams, $location){

  /* Private variables */

  var self = this;
  var authToken = WeMainService.user.token;
  var attending;
  var eventId = $stateParams.eventId;
  var ATTENDING_STATUS = WE_CONSTANTS.ATTENDING_STATUS;

  /* Public variables */

  self.lockdown = { status: false };
  self.eventDetails = {
    name: "My Event",
    participants: [
      { firstName: "Sarah", lastName: "Connor", email: "sarah@connor.com", attending: ATTENDING_STATUS.YES },
      { firstName: "John", lastName: "Connor", email: "john@connor.com", attending: ATTENDING_STATUS.NO },
      { firstName: "Jane", lastName: "Addams", email: "jane@addams.com", attending: ATTENDING_STATUS.YES },
      { firstName: "Chris", lastName: "Connor", email: "chris@connor.com", attending: ATTENDING_STATUS.YES },
      { firstName: "Anne", lastName: "Connor", email: "anne@connor.com", attending: ATTENDING_STATUS.NO },
      { firstName: "Seth", lastName: "Addams", email: "seth@addams.com", attending: ATTENDING_STATUS.NO },
      { firstName: "Linda", lastName: "Connor", email: "linda@connor.com", attending: ATTENDING_STATUS.YES },
      { firstName: "Sophie", lastName: "Connor", email: "sophie@connor.com", attending: ATTENDING_STATUS.UNDECIDED },
      { firstName: "Jack", lastName: "Addams", email: "jack@addams.com", attending: ATTENDING_STATUS.UNDECIDED },
    ]
  };

  self.message = "";

  self.tableData = {
    options: {
      title: "Participants",
      globalSearch: true,
      scrollable: false,
      pagination: true,
      editEnabled: false,
      deleteEnabled: false,
      selectable: false,
      itemsByPage: 10,
      displayedPages: 7
    },
    keys: {
      firstName: { heading: "First name", styling: "width:26%;", sorting: true, type: "plain" },
      lastName: { heading: "Last name", styling: "width:26%;", sorting: true, type: "plain" },
      email: { heading: "Email", styling: "width:26%;", sorting: true, type: "plain" },
      attending: { heading: "Attending status", styling: "width:20%", sorting: true, type: "customHtml", customHtmlFunction: decidedStatus}
    }
  };

  self.distribution = {
      type: 'pie',
      data: {
          datasets: [{
              data: countAttendingStatus(),
              backgroundColor: [
                  "#0f0",
                  "#f00",
                  "#888",
              ],
          }],
          labels: [
              "Attending",
              "Not attending",
              "Undecided",
          ]
      },
      options: {
          responsive: true
      }
  };

  /* Private functions */

  function decidedStatus(entry){
    switch(entry){
      case ATTENDING_STATUS.YES:
        return "<span class='we-event-attending-yes'>Yes</span>";
      case ATTENDING_STATUS.NO:
        return "<span class='we-event-attending-no'>No</span>";
      case ATTENDING_STATUS.UNDECIDED:
        return "<span class='we-event-attending-undecided'>Undecided</span>";
      default:
        return false;
    }
  }

  function countAttendingStatus(){
    var yes = 0;
    var no = 0;
    var undecided = 0;

    for(var i = 0; i < self.eventDetails.participants.length; i++){
      switch(self.eventDetails.participants[i].attending){
        case ATTENDING_STATUS.YES:
          yes++;
          break;
        case ATTENDING_STATUS.NO:
          no++;
          break;
        case ATTENDING_STATUS.UNDECIDED:
          undecided++;
          break;
        default:
          break;
      }
    }

    return [yes, no, undecided];
  }

  /* Public functions */

  self.addMorePeople = function(){
    console.log("clicked");
    $location.path('/extra-invitations/' + eventId);
  };

  /* Initiation */

  WeMainService.page.initialLoadingState = WE_CONSTANTS.LOADING_STATES.DONE;

}]);
