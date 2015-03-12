module.exports = function (gulp, plugins, config) {

    gulp.task('csscompile', function () {

      return gulp.src(config.scssSrcPath + '/main.scss')
        .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError("ERROR: CSS Compilation Failed")
          }))
        .pipe(plugins.compass({
          sourcemap: true,
          style: 'compressed',
          css: config.cssDistPath,
          sass: config.scssSrcPath,
          image: config.imgSrcPath
        }))
        .pipe(plugins.autoprefixer('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'))
        .pipe(gulp.dest(config.cssDistPath));
    });

};