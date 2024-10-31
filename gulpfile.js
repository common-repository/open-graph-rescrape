var gulp = require('gulp');

/*-------------------------------------------------------------------
Sync plugin folder with WP test environment every time we save
------------------------------------------------------------------*/

var watch = require('gulp-watch');

gulp.task('default', function() {  
  gulp.watch('./**/*', ['copy-folder']);
});

gulp.task('copy-folder', function() {  
  gulp.src(['./**/*', '!node_modules', '!node_modules/**'])
    .pipe(gulp.dest('/Applications/mamp/htdocs/plugintest/wp-content/plugins/og-rescrape/'))
    .pipe(gulp.dest('../og-rescrape/trunk/'));
});