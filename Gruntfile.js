'use strict';

module.exports = function(grunt) {
	var BASE_DIR = "./";
	var SRC_TS_DIR = BASE_DIR + "src/main/ts/";
	var DST_TS_DIR = SRC_TS_DIR;
	var TS_EXT = "*.ts";

	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		typescript: {
			sources: {
				src: [SRC_TS_DIR + TS_EXT],
				dest: DST_TS_DIR,
				options: {
					target: 'es3',
					base_path: SRC_TS_DIR,
					sourcemap: true,
					fullSourceMapPath: false,
					declaration: false
				}
			}
		},
		watch: {
			sources: {
				files: [SRC_TS_DIR + TS_EXT],
				tasks: ['generate']
			}
		},
		execute: {
			target: {
				src: [DST_TS_DIR+"main.js"]
			}
		},
		clean: {
			build: [SRC_TS_DIR + "*.js*"],
			node_modules: ["node_modules"]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-execute');

	grunt.registerTask('generate', ['jshint', 'typescript']);
	grunt.registerTask('watchSources', ['generate', 'watch:sources']);
	grunt.registerTask('default', ['watchSources']);
	grunt.registerTask('exec', ['generate', "execute"]);
};