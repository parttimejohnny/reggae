'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');

// Dev Server
gulp.task('dev', ['html', 'css', 'less', 'jshint', 'jscs', 'helpers', 'libs', 'vendor', 'browserify', 'images', 'watch'], function() {
    browserSync.init(['.tmp/**'], config);
});
