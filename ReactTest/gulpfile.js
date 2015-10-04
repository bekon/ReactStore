var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var gulpBowerFiles = require('gulp-bower-files');
 
gulp.task("bower-files", function(){
    gulpBowerFiles().pipe(gulp.dest("dist/lib"));
});

gulp.task('browserify', function () {
  gulp.src('src/js/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));

  gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css'));

  gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['default'])
});
