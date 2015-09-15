module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			styles: {
				src: 'src/less/style.less',
				dest: 'dist/css/style.css'
			}
		},
		cssmin: {
			options: {
	            keepSpecialComments: 0
	        },
	        my_target: {
	            src: 'dist/css/style.css',
	            dest: 'dist/css/style.min.css'
	        }
	    },
	    watch: {
	    	options: {
		        livereload: true,
		    },
		    css: {
		        files: ['src/less/style.less'],
		        tasks: ['less'],
		    }
	    }
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['less', 'cssmin', 'watch']);
}