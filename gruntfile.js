module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'styles/style.css': 'styles/style.sass'
            }
        }
    },
    watch: {
      css: {
        files: ['styles/*.sass'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
    browserSync: {
      dev: {
          bsFiles: {
              src : [
                  '*.html',
                  'styles/*.css',
                  '*.js'
              ]
          },
          options: {
              watchTask: true,
              server: './'
          }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);

};