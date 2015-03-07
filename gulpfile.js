var gulp = require('gulp');
var gutil = require('gulp-util');
var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'del'] 
});

var config = {
    scssPath: './src/scss',
    imgPath: './src/img'
}

var onError = function (err) {  
  gutil.beep();
  console.log(err);
  this.emit('end');
};

//File Cleanup
require('./tasks/clean')(gulp, plugins);

 //SASS Compilation
require('./tasks/csscompile')(gulp, plugins, config, onError);

//Image Minifications
require('./tasks/imagemin')(gulp, plugins, config, onError);

//Cachebust CSS
require('./tasks/cachebust')(gulp, plugins, onError);

//Watch For Changes
require('./tasks/watch')(gulp, plugins, config);

//Default Task Triggers Watch
gulp.task('default', function() {
    gulp.start('watch');
});