var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function(){
	return gulp.src(config.src)
	.pipe(sourcemaps.init())
	.pipe(sass({
		includePaths: require('node-neat').includePaths
	}))
	.pipe(autoprefixer({browsers: ['Last 2 version']}))
	.on('error', handleErrors)
	.pipe(gulp.dest(config.dest))
	.pipe(browserSync.reload({stream:true}));
});