module.exports = function(gulp, plugins){

    return gulp.task('css-build', function(){

      plugins.runSequence('clean', 'csscompile', 'cachebust', 'map-reference');

    });

};
