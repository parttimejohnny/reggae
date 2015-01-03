'use strict';

var gulp = require('gulp');

// Build
gulp.task('dist', ['html', 'css', 'less', 'helpers', 'libs', 'stylesDist', 'vendor', 'images'], function() {
	return gulp.src(['.tmp/**/*'], {base: '.tmp'})
	.pipe(gulp.dest('dist'))
});
