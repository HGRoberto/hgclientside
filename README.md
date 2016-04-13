# hgclientside
This repo will demonstrate how to correctly set up gulp tasks, write angular code that will be ready to be minified and bundled, and write unit tests, to name a few.

#gulpfile.js
Please take a look at the gulpfile.js in order to get a better insight of what scripts are needed when minifying and bundling.

#components
This will primarily hold directives that will be used sort of components in corresponding views.

#core
This will hold factories and services.

#dist
The above folder name has a file named bundle.js. This file contains all the javascript files needed to use the hgClientModule. This file is minified and bundled into one file using gulp.

#lib
Holds all external libraries

#tests
This folder holds all unit tests that are written to test all components, factories and services.

#app.module.js
Contains the top level module

#karma.conf.js
configuration file for build tool karma. use to run our unit test int the terminal or command prompt  

#package.json 
used for NPM
