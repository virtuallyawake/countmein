module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean:{
      build:{
        src: ['dist']
      },
      removeTemp:{
        src: ['tmp']
      }
    },
    copy:{
      htmlTask: {
        cwd: 'backend/public',
        src: [  '**/*.html', '!node_modules/**/*.html', '!bower_components/**/*.html' ],
        dest: 'tmp',
        expand: true
      },
      jsTask:{
        cwd: 'backend/public',
        src: [  'core/js/vendor.js',
                'core/js/app.js',
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/angular/angular.min.js' ],
        dest: 'dist',
        expand: true
      },
      cssTask:{
        cwd: 'backend/public',
        src: [  'core/css/main.css',
                'core/css/vendor.css',
                'node_modules/font-awesome/css/font-awesome.min.css',
                'node_modules/angular-ui-grid/ui-grid.min.css' ],
        dest: 'dist',
        expand: true
      },
      fontsTask:{
        cwd: 'backend/public',
        src: [  'node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot',
                'node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.svg',
                'node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf',
                'node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff',
                'node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2',

                'node_modules/angular-ui-grid/ui-grid.eot',
                'node_modules/angular-ui-grid/ui-grid.svg',
                'node_modules/angular-ui-grid/ui-grid.ttf',
                'node_modules/angular-ui-grid/ui-grid.woff',

                'node_modules/font-awesome/fonts/fontawesome-webfont.eot',
                'node_modules/font-awesome/fonts/fontawesome-webfont.svg',
                'node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
                'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
                'node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
                'node_modules/font-awesome/fonts/FontAwesome.otf'],
        dest: 'dist',
        expand: true
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          /*removeComments: true,*/
          collapseWhitespace: true
        },
        expand: true,
        cwd: 'tmp',
        src: [ '**/*.html', '!node_modules/angular-ui-bootstrap/template/rating/rating.html' ],
        dest: 'dist'
      }
    },
    sass:{
      dev: {
        options: {
          style: 'expanded',
          precision: 8 /* Bootstrap sass requires this setting */
        },
        files: {
          'backend/public/core/css/main.css': 'backend/public/core/css/main.scss'
        }
      }
    },
    autoprefixer:{ /* Bootstrap sass requires this */
      options:{
        browsers: [ "Android 2.3",
                    "Android >= 4",
                    "Chrome >= 20",
                    "Firefox >= 24",
                    "Explorer >= 8",
                    "iOS >= 6",
                    "Opera >= 12",
                    "Safari >= 6" ]
      },
      dev:{
        'backend/public/core/css/main.css': 'backend/public/core/css/main.css'
      }
    },
    concat:{
      vendorcss:{
        src: [
          'backend/public/node_modules/bootstrap-markdown/css/bootstrap-markdown.min.css',
          'backend/public/node_modules/ng-toast/dist/ngToast.min.css'
        ],
        dest: 'backend/public/core/css/vendor.css'
      },
      vendorjs: {
        src: ['backend/public/node_modules/bootstrap/dist/js/bootstrap.min.js',
              'backend/public/node_modules/angular-sanitize/angular-sanitize.min.js',
              'backend/public/node_modules/angular-animate/angular-animate.min.js',
              'backend/public/node_modules/angular-ui-grid/ui-grid.min.js',
              'backend/public/node_modules/angular-ui-router/release/angular-ui-router.min.js',
              'backend/public/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
              'backend/public/node_modules/angular-smart-table/dist/smart-table.min.js',
              'backend/public/bower_components/marked/lib/marked.js',
              'backend/public/node_modules/bootstrap-markdown/js/bootstrap-markdown.js',
              'backend/public/node_modules/ng-file-upload/dist/ng-file-upload-shim.js',
              'backend/public/node_modules/ng-file-upload/dist/ng-file-upload.min.js',
              'backend/public/node_modules/ng-toast/dist/ngToast.min.js',
              'backend/public/node_modules/d3/d3.min.js',
              'backend/public/core/js/ie10-viewport-bug-workaround.js',
            ],
            dest: 'backend/public/core/js/vendor.js'
      },
      nativejs: {
        src: [
              'backend/public/core/js/module.js',
              'backend/public/core/js/constants.js',
              'backend/public/core/js/main-service.js',
              'backend/public/core/js/run.js',
              'backend/public/core/js/routes.js',
              'backend/public/core/js/backend-service.js',
              'backend/public/core/js/main-controller.js',
              'backend/public/core/js/we-tool-service.js',

              'backend/public/components/list/list-directive.js',
              'backend/public/components/tabs/tabs-directive.js',
              'backend/public/components/datepicker/datepicker-directive.js',
              'backend/public/components/data-loading/data-loading-directive.js',
              'backend/public/components/text-editor/text-editor-directive.js',
              'backend/public/components/object-structure/object-structure-directive.js',
              'backend/public/components/input-group/input-group-directive.js',
              'backend/public/components/table/table-directive.js',
              'backend/public/components/d3-lines/d3-lines-directive.js',

              'backend/public/dashboard/dashboard-controller.js',

              'backend/public/arithmetics/arithmetics-service.js',
              'backend/public/arithmetics/arithmetics-controller.js',
              'backend/public/arithmetics/integers/integers-controller.js',
              'backend/public/arithmetics/rationals/rationals-controller.js',
              'backend/public/arithmetics/powers/powers-service.js',
              'backend/public/arithmetics/powers/powers-controller.js'

            ],

        dest: 'backend/public/core/js/app-non-uglified.js'
      }
    },
    uglify:{
      options: {
        // mangle: false, /* Mangling might be too strict for AngularJS, but so far so good */
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'backend/public/core/js/app-non-uglified.js',
        dest: 'backend/public/core/js/app.js'
      }
    },
    jshint:{
      all: ['Gruntfile.js', 'backend/public/core/js/app-non-uglified.js']
    },
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['backend/public/core/css/main.css']
      },
      /*lax: {
        options: {
          import: false
        },
        src: ['backend/public/core/css/main.css']
      }*/
    },
    karma: {
      unit: {
        configFile: 'tests/karma.conf.js',
        background: true,
        singleRun: false
      }
    },
    watch:{
      // karma: {
      //   files: ['backend/public/**/*.js', '!backend/public/core/js/dist/*.js', 'tests/**/*.js'],
      //   tasks: ['karma:unit:run', 'bell'] //NOTE the :run flag
      // },
      scripts:{
        files:[ 'backend/public/core/js/*.js',
                '!backend/public/core/js/app.js',
                '!backend/public/core/js/app-non-uglified.js',
                '!backend/public/core/js/vendor.js',
                'backend/public/components/**/*.js',
                'backend/public/main/*.js',
                'backend/public/dashboard/*.js',
                'backend/public/not-allowed/*.js',
                'backend/public/arithmetics/**/*.js',
                'backend/public/dev-resources/**/*.js' ],

        tasks:['concat', 'jshint', 'uglify', 'bell']
      },
      css:{
        files:['backend/public/**/*.scss'],
        tasks:['sass', 'autoprefixer', 'bell']
      },
      grunt:{
        files:['Gruntfile.js'],
        tasks:['concat', 'uglify', 'watch', 'sass', 'bell']
      },
      build:{
        files:['backend/public/build-trigger.js'],
        tasks:['clean:build', 'copy', 'htmlmin', 'clean:removeTemp', 'bell']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-bell');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'jshint', 'uglify', 'watch', 'sass', 'csslint', 'bell']);

};
