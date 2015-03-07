module.exports = function (gulp, plugins, config, onError) {

    gulp.task('csscompile', function () {

      console.log(plugins);

      return gulp.src(config.scssPath + '/main.scss')
        .pipe(plugins.plumber({
            errorHandler: onError
          }))
        .pipe(plugins.compass({
          css: './dist/css',
          sass: './src/scss'
        }))
        .pipe(plugins.autoprefixer('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('./dist/css'));

    });

};