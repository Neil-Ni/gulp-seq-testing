'use strict';

var gulp = require('gulp');

module.exports = function(options) {
  gulp.task('b', function () {
    console.log(gulp.seq);
  });

  gulp.task('a', ['b'], function () {
    console.log(gulp.seq);
  });
};
