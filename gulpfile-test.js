var gulp=require('gulp');
var react=require('gulp-react');
var babel=require('gulp-babel');
var less=require('gulp-less');
var browserify=require('gulp-browserify'); //模块化
var uglify=require('gulp-uglify'); //压缩
var concat=require('gulp-concat');
var rename=require('gulp-rename');



gulp.task('less',function(){
	return gulp.src('./src/css1.less')
			.pipe(less())
			.pipe(gulp.dest('./dest'))
});
// gulp.task('browserify',function(){
// 	return gulp.src('./src/browserify.js')test
// 			.pipe(browserify())
// 			.pipe(gulp.dest('./build'))
// });
// gulp.task('browserify',function(){
// 	return gulp.src('./src/browserify.js')
// 			.pipe(browserify())
// 			.pipe(uglify())
// 			.pipe(gulp.dest('./dest'))
// });
gulp.task('all',function(){
	return gulp.src('./src/*.js')
		   .pipe(react())
		   .pipe(babel({
		   	presets:['babel-preset-es2015']
		   }))
			.pipe(concat('index.js'))
			.pipe(gulp.dest('./dest'))
			.pipe(rename({suffix:'.min'}))
			.pipe(uglify())
			.pipe(gulp.dest('./dest'))
});
gulp.task('default',['less','all'],function(){
	return gulp.src('./src/main.js')
		   .pipe(react())
		   .pipe(babel({
		   	presets:['babel-preset-es2015']
		   }))
		   .pipe(gulp.dest('./dest'))
});