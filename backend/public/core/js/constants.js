/* File: app/core/js/constants.js */

weApp.constant("WE_CONSTANTS", (function(){

  /* These are defined privately first, because they are required lateron in the public declaraions */

  var BACKEND_BASEPATH = 'http://localhost:3000';

  var PAGES = {

    NOT_ALLOWED: { ID: 999, TITLE: "Niet toegestaan" },

    DASHBOARD: { ID: 0, TITLE: "New event" },

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
      COMMIT_TO_BACKEND: { NAME: 'commitToBackend', URL: BACKEND_BASEPATH + '/api/event', POST: [ 'newEvent' ], RESULT: DEFAULT_RESULT },
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
