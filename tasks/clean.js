module.exports = function(gulp, plugins) {

    gulp.task('clean', function(cb){
        return plugins.del(['./dist/css/**/*'], cb);
    });

};