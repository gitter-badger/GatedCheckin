var gulp = require('gulp'),
    lint = require('gulp-jshint');

var map = require('map-stream');
var exitOnJshintError = map(function (file) {
    'use strict';
    if (!file.jshint.success) {
        console.error('jshint failed'); /*jshint ignore:line*/
        process.exit(1); /*jshint ignore:line*/
    }
});

gulp.task('lint', function () {
    'use strict';
    return gulp.src('app.js')
        .pipe(lint('.jshintrc'))
        .pipe(lint.reporter('jshint-stylish'))
        .pipe(exitOnJshintError);
});