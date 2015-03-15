module.exports = function(gulp, plugins){

    return gulp.task('css-build', function(){

      plugins.runSequence('clean-css', 'move-files', ['csscompile', 'cachebust'], 'map-reference', 'reload');

    });

};
