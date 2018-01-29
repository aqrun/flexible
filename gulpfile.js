var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('build', function(){
  gulp.src('flexible.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
    .on('end',function(){
      console.log('uglify flexible complete')
    });
});

