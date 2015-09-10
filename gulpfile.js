var gulp = require('gulp');
var concat = require('gulp-concat');
var jsPaths = [
  "./src/vendor/**/*.min.js",
  "./src/js/*.js"
];
gulp.task('scripts', function(){
  gulp.src(jsPaths)
    .pipe(concat('cuteCrow.js'))
    .pipe(gulp.dest('./build/script/'));
});
