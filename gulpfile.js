'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

var options = {
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options);
});

gulp.task('default', function () {
    gulp.start('a');
});

gulp.task('default:dist', function () {
    gulp.start('b');
});
