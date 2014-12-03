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

/* Set up of Gulp Tasks */

/* Sass Compile and Minify */

gulp.task('sass', function(){
	gulp.src('src/scss/app.scss')
		.pipe(sass({
			includePaths: require('node-bourbon').includePaths
		})
		.pipe(sass({
			includePaths: require('node-neat').includePaths
		}))
		)
		.pipe(gulp.dest('dist/css/app.css'));
});

/* JS concat and minify */
gulp.task('scripts', function(){
	gulp.src('src/js/*js')
		.pipe(concat('main.js'))
			.pipe(rename({suffix: '.min'}))
			.pipe(uglify())
			.pipe(gulp.dest('dist/js'));
})

gulp.task('watch', function(){
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/*js');
})

gulp.task('default', ['sass', 'scripts', 'watch']);