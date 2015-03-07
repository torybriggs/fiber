module.exports = function(gulp, plugins, config) {

    gulp.task('watch', function () {

        plugins.watch(config.jsPath + '/**/*.js', function () {
            gulp.start('uglify');
        });

        plugins.watch(config.scssPath + '/**/*.scss', function () {
            gulp.start('css-build');
        });

        plugins.watch(config.imgPath + '/**/*', function () {
            gulp.start('imagemin');
        });

    });

};

