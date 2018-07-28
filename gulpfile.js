const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src(['./src/source/scss/**/*.scss'])
    .pipe(sass({
      outputStyle: 'nested', // https://web-design-weekly.com/2014/06/15/different-sass-output-styles/
    }).on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('sasswatch', () => {
  gulp.watch('./src/source/scss/**/*.scss', ['sass']);
});
