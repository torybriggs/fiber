var getStamp = function() {
    var myDate = new Date();

    var myYear = myDate.getFullYear().toString();
    var myMonth = ('0' + (myDate.getMonth() + 1)).slice(-2);
    var myDay = ('0' + myDate.getDate()).slice(-2);
    var mySeconds = myDate.getSeconds().toString();

    var myFullDate = myYear + myMonth + myDay + mySeconds;

    return myFullDate;
};

// Insert timestamp into CSS reference

module.exports = function(gulp, plugins, onError) {

    gulp.task('cachebust', function() {

        return gulp.src('index.html')
            .pipe(plugins.plumber({
              errorHandler: onError
            }))
           .pipe(plugins.replace(/main\.?([0-9]*)\.css/g, 'main.' + getStamp() + '.css'))
            .pipe(gulp.dest(''))

        });

};