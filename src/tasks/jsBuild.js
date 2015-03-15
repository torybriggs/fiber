module.exports = function(gulp, plugins){

    return gulp.task('js-build', function(){

      plugins.runSequence('clean-js', 'browserify', 'move-files', 'reload');

    });

};