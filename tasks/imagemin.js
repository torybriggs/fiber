module.exports = function(gulp, plugins, config, onError) {

    gulp.task('imagemin', function(){

        return gulp.src(config.imgPath + '/**/*')
            .pipe(plugins.plumber({
              errorHandler: onError
            }))
            .pipe(plugins.newer('dist/img'))
           .pipe(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
            .pipe(gulp.dest('dist/img'));

    });

};