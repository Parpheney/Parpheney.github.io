module.exports = function(grunt) {

  grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          concat: {
              options: {
                  separator: ';'
              },
              dist: {
                src: ['src/js/*.js'],
                dest: 'dist/script.min.js'
            }
        },
        uglify: {
            dist: {
                src: 'dist/script.min.js',
                dest: 'dist/script.min.js'
            }
        },
        cssmin: {
            with_banner: {
                options: {
                    banner: '/* My minified CSS */'
                },

                files: {
                    'dist/style.min.css' : ['src/css/*.css']  
}
              }
          }
      });

      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-cssmin');


  grunt.registerTask('default', ['concat','uglify', 'cssmin']);

};
