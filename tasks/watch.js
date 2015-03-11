module.exports = function(gulp, plugins, config) {

    gulp.task('watch', function () {

        plugins.watch(config.jsSrcPath + '/**/*.js', function () {
            gulp.start('browserify');
        });

        plugins.watch(config.scssSrcPath + '/**/*.scss', function () {
            gulp.start('css-build');
        });

        plugins.watch(config.imgSrcPath + '/**/*', function () {
            gulp.start('imagemin');
        });

    });

};

