/*****
 *
 * Install first this modules as devDependencies
 *
 *  npm install gulp gulp-util gulp-concat gulp-uglify --save-dev
 *
 ******/

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    paths = require('./gulpconfig.js'),
    exec = require('child_process').exec;
    
const APP_JS_SRC = ["./www/*.js"];
const APP_HTML_SRC = ["./www/*.html"];
const APP_CSS_SRC = ['./www/*.css'];

var deployWebScript = "./deployweb.sh";
if (process.platform == "win32") {
    deployWebScript = "deployweb.bat";
}
gulp.task('deploywar', function() {
    exec(deployWebScript + " " + paths.mfpserver_path + " " + paths.war_name, function(err, stdout, stderr) {
        if (stderr != "")
            gutil.log(stderr);
    });
    return gutil.log('War deployed successfully!');
});

gulp.task('watch', function() {
    gulp.watch(APP_HTML_SRC, ['deploywar']);
    gulp.watch(APP_JS_SRC, ['deploywar']);
    gulp.watch(APP_CSS_SRC, ['deploywar']);
});

gulp.task('default', ['watch']);
