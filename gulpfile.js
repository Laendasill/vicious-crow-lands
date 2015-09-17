var gulp        = require('gulp');
var concat      = require('gulp-concat');
var babel       = require('gulp-babel');
var sourcemaps  = require('gulp-sourcemaps');
var jsPaths = [
 // "./src/vendor/**/*.min.js",
  "./src/intro.js",
  "./src/js/*.js"
];

gulp.task('scripts', function(){
  gulp.src(jsPaths)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('cuteCrow.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/script/'));
});

gulp.task('default',['scripts']);
