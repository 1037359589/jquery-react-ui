var gulp=require('gulp');
var react=require('gulp-react');
var babel=require('gulp-babel');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var jquery=require('gulp-jquery');
var rename=require('gulp-rename');
var minCss=require('gulp-minify-css');
// var es2015=require('babel-preset-es2015');


gulp.task('jquery-ui-js',function(){
	return gulp.src('./js/jquery-ui/*.js')
			// .pipe(jquery())
			.pipe(concat('jquery-own-ui.js'))
			.pipe(gulp.dest('./dest/jquery-ui'))
			.pipe(rename({suffix:'.min'}))
			.pipe(uglify())
			.pipe(gulp.dest('./dest/jquery-ui'));
});
gulp.task('own-ui-css',function(){
	return gulp.src('./css/jquery-ui/*.css')
			// .pipe(jquery())
			.pipe(concat('jquery-ui.css'))
			.pipe(gulp.dest('./dest/own-ui'))
			.pipe(rename({suffix:'.min'}))
			.pipe(minCss())
			.pipe(gulp.dest('./dest/own-ui'));
});
gulp.task('react-ui-js',function(){
	return gulp.src('./js/react-ui/*.js')
			.pipe(react())
			// .pipe(babel({
			// 	presets:['babel-preset-es2015']	
			// }))
			.pipe(concat('react-own-ui.js'))
			.pipe(gulp.dest('./dest/react-ui'))
			.pipe(rename({ suffix:'.min' }))
			.pipe(uglify())
			.pipe(gulp.dest('./dest/react-ui'));
});
gulp.task('default',['own-ui-css','jquery-ui-js','react-ui-js'],function(){
	gulp.watch('./js/jquery-ui/*.js',['jquery-ui-js']).on('change',function(e){
		console.log('File'+e.path+'was'+e.type+'runing tasks...');
	});
	gulp.watch('./js/react-ui/*.js',['react-ui-js']).on('change',function(e){
		console.log('File'+e.path+'was'+e.type+'runing tasks...');
	});
	gulp.watch('./css/jquery-ui/*.css',['own-ui-css']).on('change',function(e){
		console.log('File'+e.path+'was'+e.type+'runing tasks...');
	})
	console.log('压缩合并完成！！');
});
