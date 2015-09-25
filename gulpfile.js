var gulp = require('gulp'),
    lint = require('gulp-jshint'),
    tests = require('gulp-mocha'),
    istanbul = require('gulp-istanbul');

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

gulp.task('testCoverage', function (cb) {
    'use strict';
  gulp.src(['lib/**/*.js', 'main.js'])
    .pipe(istanbul()) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src(['testy.js'])
        .pipe(tests())
        .pipe(istanbul.writeReports()) // Creating the reports after tests ran
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } })) // Enforce a coverage of at least 90%
        .on('end', cb);
    });
});