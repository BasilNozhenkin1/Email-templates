const gulp = require('gulp')
const mjml = require('gulp-mjml')
const notifications = {
	"htmls/adv": "adv",
	"htmls/info": "info",
	"htmls/sys": "sys",
	"htmls/tech": "tech"
}

let stream;

gulp.task('default', function () {
  for (var n in notifications) {
  	stream = gulp.src('./'+notifications[n]+'/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./'+n));
  }
  return stream;
})