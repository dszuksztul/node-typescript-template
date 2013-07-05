# node-typescript-template

## Objective
This project provides sample typescript project template for Node.js.
Includes gruntfile for basic project preparation and for running Jasmine tests.

Usage is free.
includes work from: [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped).

## Usage
Execute:

    npm install  
    grunt exec

or

    grunt test

Add your own source files into src/main/ts.  
Add your own test files into src/test/ts.  
Add typescript definitiopn files into lib/ directory.  

Available grunt tasks:
 * exec - execute sample program
 * generate - build js files from ts
 * test - run jasmine test
 * watchTests - watch file changes and autmaticaly trigger build and tests
 * watchSources - watch file changes and autmaticaly trigger js build
 * clean:build - clean build javascript files
 * clean:node_modules - clean downloaded node_modules
 
