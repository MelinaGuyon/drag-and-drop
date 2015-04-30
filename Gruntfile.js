module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: { // only js
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/script/myproject.js',
        dest: 'build/assets/script/<%= pkg.name %>.min.js'
      }
    }, // need coma because json object

    cssmin: { // only css
      target: {
        files: [{
          expand: true,
          cwd: 'src/css', //folder
          src: ['*.css'], // it takes all my css file in my folder defined up, so css
          dest: 'build/assets/css', // it puts them on build
          ext: '.min.css' // it attributes the extension .min.js
        }]
      }
    }, // need coma because json object

    copy: { // copy the all elements
      html: {
        files: [{
          expand: true,
          cwd: 'src/html', //folder
          src: ['*.html'],
          dest: 'build',
          ext: '.html'
        }]
      },

      punch: {
        files: [{
          expand: true,
          cwd: 'src/script/touch-punch', //folder
          src: ['*.js'],
          dest: 'build/assets/script/touch-punch',
          ext: '.js'
        }]
      },

      jquery: {
        files: [{
          expand: true,
          cwd: 'src/script/jquery', //folder
          src: ['*.js'],
          dest: 'build/assets/script/jquery',
          ext: '.js'
        }]
      },

      scroll: {
        files: [{
          expand: true,
          cwd: 'src/script/scrollbar', //folder
          src: ['*.js'],
          dest: 'build/assets/script/scrollbar',
          ext: '.js'
        }]
      },

      img: {
        files: [{
          expand: true,
          cwd: 'src/img', //folder
          src: ['*.png'],
          dest: 'build/assets/img',
          ext: '.png'
        }]
      }
    }, 


    connect: {
      example: {
        port: 1337,
        base: 'build'
      },
      meta: {
        port: 1338,
        base: 'build'
      }


    },



          watch: { //  save automatially my index.html in my index.min.html for example
            scripts: {
              files: ['src/script/*.js'],
              tasks: ['uglify'], // tache : le 'uglify' est applique directement a mes fichiers js modifie
              options: {
                spawn: false
              },
            },

            css: {
              files: ['src/css/*.css'],
              tasks: ['cssmin'],
              options: {
                spawn: false
              },
            },

            html: {
              files: ['src/html/*.html'],
              tasks: ['copy'], // copy parce que sa premiere appelation est copy
              options: {
                spawn: false
              },
            } 
          }

  });



  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify'); // load the software js
  grunt.loadNpmTasks('grunt-contrib-cssmin'); // load the software css
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');// load the software html
  grunt.loadNpmTasks('grunt-connect');
  // the first : grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin','copy']); // put in the []  it is what it has to copy

};