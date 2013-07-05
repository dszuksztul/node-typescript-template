'use strict';

module.exports = function(grunt) {
	var BASE_DIR = "./";
	var SRC_TS_DIR = BASE_DIR + "src/main/ts/";
	var DST_TS_DIR = SRC_TS_DIR;
	var SRC_TEST_TS_DIR = BASE_DIR + "src/test/ts/";
	var DST_TEST_TS_DIR = SRC_TEST_TS_DIR;
	var JASMINE_SPEC_EXT = '*.spec.js';
	var TS_EXT = "*.ts";
	var JASMINE_REPORT_DIR = BASE_DIR+"report/";

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
			},
			test: {
				src: [SRC_TEST_TS_DIR + TS_EXT],
				dest: DST_TEST_TS_DIR,
				options: {
					target: 'es3',
					base_path: SRC_TEST_TS_DIR,
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
			},
			test: {
				files: [SRC_TS_DIR + TS_EXT, SRC_TEST_TS_DIR+TS_EXT],
				tasks: ['test']
			}
		},
		execute: {
			target: {
				src: [DST_TS_DIR+"main.js"]
			}
		},
        jasmine_node: {
		    projectRoot: DST_TEST_TS_DIR,
		    requirejs: false,
		    forceExit: false,
		    jUnit: {
		      report: true,
		      savePath : JASMINE_REPORT_DIR,
		      useDotNotation: true,
		      consolidate: true
		    }
        },
		clean: {
			build: [SRC_TS_DIR + "*.js*", SRC_TEST_TS_DIR + "*.js*"],
			node_modules: ["node_modules"]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-execute');
	grunt.loadNpmTasks('grunt-jasmine-node');

	grunt.registerTask('generate', ['jshint', 'typescript']);
	grunt.registerTask('watchSources', ['generate', 'watch:sources']);
	grunt.registerTask('watchTests', ['test', 'watch:test']);
	grunt.registerTask('default', ['watchSources']);
	grunt.registerTask('exec', ['generate', "execute"]);
	grunt.registerTask('test', ['typescript', "jasmine_node"]);
};