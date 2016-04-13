var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

    var scriptPaths = ['app.module.js', 'core/*.js', 'components/*.js'];

    gulp.task('watchJShint', function() {
      gulp.watch(scriptPaths, ['jshint']);
    });

    gulp.task('jshint', function() {
      return gulp.src(scriptPaths)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
    });

    gulp.task('watchToBundle', function() {
      gulp.watch(scriptPaths, ['build-js']);
    });

    gulp.task('build-js', function() {
      return gulp.src(scriptPaths)
                 .pipe(concat('bundle.min.js'))
                 .pipe(uglify())
                 .pipe(gulp.dest('dist/'));
    });
