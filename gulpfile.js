var gulp = require('gulp'),
    lint = require('gulp-jshint'),
    tests = require('gulp-mocha');

gulp.task('lint', function () {
    'use strict';
    return gulp.src('app.js')
        .pipe(lint('.jshintrc'))
        .pipe(lint.reporter('jshint-stylish'))
        .pipe(lint.reporter('fail'));
});

gulp.task('default', function () {
    'use strict';
    console.log('you are awesome'); /*jshint ignore:line*/
});

gulp.task('testSuite', function () {
    'use strict';
    return gulp.src('testy.js')
        .pipe(tests());
});