module.exports = function (gulp, plugins, config) {

    gulp.task('csscompile', function () {

      return gulp.src(config.scssPath + '/main.scss')
        .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError("ERROR: CSS Compilation Failed")
          }))
        .pipe(plugins.compass({
          sourcemaps: true,
          style: 'compact',
          css: './dist/css',
          sass: config.scssPath,
          image: config.imgPath
        }))
        .pipe(plugins.autoprefixer('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'))
        .pipe(gulp.dest('./dist/css'));
    });

};