/* Setup of Gulp plugins and dependencies */


var gulp = require ('gulp'),
	sass = require ('gulp-sass'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename');
var paths = {
	scss: './src/scss/*.scss'
};

/* Set up of Gulp Tasks */

gulp.task('styles', function(){
	return gulp.src(paths.scss)
		.pipe(sass({style: 'expanded'}))
		.pipe(autoprefixer('last 2version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(gulp.dest('css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('css'));	
});


gulp.task('browser-sync', function(){
	var files = [
		'src/scss/**/*.scss',
		'src/css/**/*.css',
		'src/js/**/*.js'
	];

browserSync.init(files, {
	server: {
		baseDir: './'
	}
});

});