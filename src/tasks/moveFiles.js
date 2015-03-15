module.exports = function(gulp, plugins, config) {
   
    gulp.task('move-files', function(){

        return gulp.src('./src/index.html')
            .pipe(gulp.dest('./dist'));

        return gulp.src('./src/404.html')
            .pipe(gulp.dest('./dist'));

        return gulp.src('./src/favicon.ico')
            .pipe(gulp.dest('./dist'));

        return gulp.src('./src/apple-touch-icon.png')
            .pipe(gulp.dest('./dist'));

    });
};