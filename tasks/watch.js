module.exports = function(gulp, plugins, config) {

    gulp.task('watch', function () {
        return plugins.watch(config.scssPath + '/**/*.scss', function () {
            gulp.start('clean','csscompile', 'cachebust')});
        return plugins.watch(config.imgPath + '/**/*', function () {
            gulp.start('imagemin');
        });
    });

};

