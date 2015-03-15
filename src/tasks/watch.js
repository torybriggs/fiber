module.exports = function(gulp, plugins, config) {

    gulp.task('watch', function () {

        plugins.watch(config.jsSrcPath + '/**/*.js', function () {
            gulp.start('js-build');
        });

        plugins.watch(config.scssSrcPath + '/**/*.scss', function () {
            gulp.start('css-build');
        });

        plugins.watch(config.imgSrcPath + '/**/*', function () {
            gulp.start('imagemin');
        });

        plugins.watch('./src/*.html', function () {
            gulp.start('move-files');
        });

    });

};

