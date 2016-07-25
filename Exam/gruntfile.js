module.exports = function(grunt) {

  grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          concat: {
            css: {

                src: ['styles/variables.scss','styles/reset.scss','styles/style.scss', 'styles/slider.scss'],
                dest: 'styles/main.scss',
              },
          js: {
                  src: ['js/*.js'],
                  dest: 'dist/js/script.min.js'
          }
                },
        uglify: {
            dist: {
                src: 'dist/js/script.min.js',
                dest: 'dist/js/script.min.js'
            }
        },
          sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['main.scss'],
        dest: 'dist/css',
        ext: '.css'
      }]
    }
  },
  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['styles/*.scss'],
      tasks: ['concat','sass'],
    }}
      });

      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat','uglify', 'sass']);

};
