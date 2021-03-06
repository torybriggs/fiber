// Insert timestamp into CSS reference

module.exports = function(gulp, plugins) {

    gulp.task('cachebust', function() {

        var getStamp = function() {
            var myDate = new Date();

            var myYear = myDate.getFullYear().toString();
            var myMonth = ('0' + (myDate.getMonth() + 1)).slice(-2);
            var myDay = ('0' + myDate.getDate()).slice(-2);
            var mySeconds = myDate.getSeconds().toString();

            var myFullDate = myYear + myMonth + myDay + mySeconds;

            return myFullDate;
        };

        return gulp.src('./dist/index.html')
            .pipe(plugins.plumber({
              errorHandler: plugins.notify.onError("ERROR: Cachebusting Regex Failed")
            }))
           .pipe(plugins.replace(/main\.css/g, 'main.' + getStamp() + '.css'))
            .pipe(gulp.dest('./dist'))

        });

};