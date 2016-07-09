/* File: app/core/js/constants.js */

weApp.constant("WE_CONSTANTS", (function(){

  /* These are defined privately first, because they are required lateron in the public declaraions */

  var BACKEND_BASEPATH = 'http://localhost:3000';

  var PAGES = {

    NOT_ALLOWED: { ID: 999, TITLE: "Niet toegestaan" },

    DASHBOARD: { ID: 0, TITLE: "New event" },
    ATTEND: { ID: 1, TITLE: "Attend the event" },
    EVENT: { ID: 2, TITLE: "Event details" },
    EXTRA_INVITATIONS: { ID: 3, TITLE: "Invite more people" },

    DEFAULT: { ID: 0, TITLE: "New event" }
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
      COMMIT_TO_BACKEND: { NAME: 'commitToBackend', URL: BACKEND_BASEPATH + '/api/event', METHOD: "post", PARAMETERS: [ 'newEvent' ], RESULT: DEFAULT_RESULT },
      GET_EVENT_DETAILS: { NAME: 'getEventDetails', URL: BACKEND_BASEPATH + '/api/event/', METHOD: "get", PARAMETERS: [], RESULT: DEFAULT_RESULT },

      GET_PARTICIPANT_STATUS: {NAME: 'getParticipantStatus', URL: BACKEND_BASEPATH + '/api/attend/', METHOD: "get", PARAMETERS: [], RESULT: DEFAULT_RESULT },
      UPDATE_PARTICIPANT_STATUS: { NAME: 'updateParticipantStatus', URL: BACKEND_BASEPATH + '/api/attend/', METHOD: "post", PARAMETERS: [ 'attending' ], RESULT: DEFAULT_RESULT },

      ADD_PARTICIPANTS: { NAME: 'addParticipants', URL: BACKEND_BASEPATH + '/api/participants', METHOD: "post", PARAMETERS: [ 'eventId', 'participants' ], RESULT: DEFAULT_RESULT }
    },

    /* Routing configurations */
    STATES: [
      /* General */
      { NAME: 'dashboard', STATE_CONFIG: [ '/dashboard', 'dashboard/dashboard.html', 'WeDashboardController as weDashboardCtrl', PAGES.DASHBOARD.ID, PAGES.DASHBOARD.TITLE, false, 'page' ] },
      { NAME: 'attend', STATE_CONFIG: [ '/attend/:eventId/:participantId', 'attend/attend.html', 'WeAttendController as weAttendCtrl', PAGES.ATTEND.ID, PAGES.ATTEND.TITLE, false, 'page' ] },
      { NAME: 'event', STATE_CONFIG: [ '/event/:eventId', 'event/event.html', 'WeEventController as weEventCtrl', PAGES.EVENT.ID, PAGES.EVENT.TITLE, false, 'page' ] },
      { NAME: 'extra-invitations', STATE_CONFIG: [ '/extra-invitations/:eventId', 'extra-invitations/extra-invitations.html', 'WeExtraInvitationsController as weExtraInvitationsCtrl', PAGES.EXTRA_INVITATIONS.ID, PAGES.EXTRA_INVITATIONS.TITLE, false, 'page' ] },
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

    ATTENDING_STATUS: {
      NO: 0,
      YES: 1,
      UNDECIDED: 2
    }
  };
})());
