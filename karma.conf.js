// Karma configuration
// Generated on Wed Apr 13 2016 21:34:33 GMT+0200 (W. Europe Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "../app/node_modules/jquery/dist/jquery.min.js",
      "../app/node_modules/angular/angular.min.js",
      "../node_modules/angular-mocks/angular-mocks.js",

      "../app/node_modules/angular-sanitize/angular-sanitize.min.js",
      "../app/node_modules/angular-ui-router/release/angular-ui-router.min.js",
      "../app/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
      "../app/node_modules/angular-smart-table/dist/smart-table.min.js",
      "../app/node_modules/angular-ui-grid/ui-grid.min.js",
      "../app/bower_components/marked/marked.min.js",
      "../app/node_modules/ng-file-upload/dist/ng-file-upload-shim.js",
      "../app/node_modules/ng-file-upload/dist/ng-file-upload.min.js",

      '../app/core/js/module.js',
      '../app/core/js/constants.js',
      '../app/core/js/main-service.js',
      '../app/core/js/run.js',
      '../app/core/js/routes.js',
      '../app/core/js/backend-service.js',
      '../app/core/js/we-tool-service.js',
      '../app/core/js/main-controller.js',

      '../app/components/list/list-directive.js',
      '../app/components/we-data-loading/we-data-loading.js',

      "../app/dashboard/dashboard-controller.js",
      "../app/dashboard/dashboard-controller_test.js",
      "../app/aha-flow/list/aha-list-controller.js",
      "../app/aha-flow/list/aha-list-controller_test.js",
      "../app/users/list/users-list-controller.js",
      "../app/users/list/users-list-controller_test.js",
      "../app/brands/list/brands-list-controller.js",
      "../app/brands/list/brands-list-controller_test.js" ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 8080,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
