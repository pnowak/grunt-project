module.exports = function (grunt) {

  grunt.initConfig({
    jade: {
        dist: {
            files: {
                'dist/index.html': 'src/templates/index.jade',
                'dist/table.html': 'src/templates/table.jade',
                'dist/form.html':'src/templates/form.jade',
                'dist/collection.html':'src/templates/extends/collection.jade'
            } 
        },
        server: {
            options: {
                data: {
                    debug: false
                }
            },
            files: {
                'dist/index.html':
                'src/templates/index.jade',
                'dist/blog.html':
                'src/templates/blog.jade',
                'dist/post.html':
                'src/templates/post.jade'
            }
        }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          dest: 'dist',
          src: [
            'images/**',
            'scripts/**',
            'styles/**.css',
            'styles/fonts/**',
          ]
        }]
      }
    },
    watch: {
        options: {
            nospawn: true
        },
        jade: {
            files: ['src/templates/{,*/}*.jade'],
            tasks: ['jade:server']
        },
        copy: {
            files: [
                'src/images/**',
                'src/scripts/**',
                'src/styles/**.css',
                'src/font/roboto/**'
            ],
            tasks: ['copy']
        },
        dist: {
            files: ['dist/**'],
            options: {
                livereload: true
            }
        }
    },
    connect: {
        dist: {
            options: {
                port: 5455,
                hostname: '0.0.0.0',
                base: 'dist',
                livereload: true
            }
        }
    },
    open: {
        dist: {
            path: 'http://localhost:5455'
        }
    },
    clean: {
        dist: 'dist'
    }
  });

  grunt.registerTask('build', [
    'clean',
    'jade',
    'copy'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect',
    'open',
    'watch'
  ]);

  grunt.registerTask('default', 'server');

  require('load-grunt-tasks')(grunt);
};
