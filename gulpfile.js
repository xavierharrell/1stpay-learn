/* Setup of Gulp plugins and dependencies */


var gulp = require ('gulp'),
	watch = require('gulp-watch'),
	sass = require ('gulp-sass'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	bourbon = require('node-bourbon'),
	neat = require('node-neat');
	bourbon.includePaths
	neat.includePaths
var reload = browserSync.reload;

/* Set up of Gulp Tasks */

/* JS concat and minify */
gulp.task('scripts', function(){
	gulp.src('src/js/*js')
		.pipe(concat('main.js'))
			.pipe(rename({suffix: '.min'}))
			.pipe(uglify())
			.pipe(gulp.dest('dist/js'));
});



/* Sass Compile and Minify */

gulp.task('sass', function(){
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass({
			includePaths: require('node-bourbon').includePaths
		})
		.pipe(sass({
			includePaths: require('node-neat').includePaths
		}))
		)
		.pipe(gulp.dest('dist/css'))
		.pipe(reload({stream:true}));
});



gulp.task('watch', function(){
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/*js');
	gulp.watch('src/*html');
})

gulp.task('default', ['sass', 'scripts', 'watch']);