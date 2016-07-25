module.exports = function(grunt) {

  grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          concat: {
              dist: {
                src: ['styles/variables.scss','styles/reset.scss','styles/style.scss'],
                dest: 'styles/main.scss'
            }
        },
          sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['main.scss'],
        dest: 'css',
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
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'sass']);

};
