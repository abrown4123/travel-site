var gulp = require("gulp"),
		watch = require("gulp-watch");

gulp.task("default", function(){
		console.log("Hooray");
});

gulp.task('html', function(){
		console.log("HTML!!!"); 
});

gulp.task('watch', fucntion(){
				
		watch('./app/index.html', function(){
			gulp.start('html');
		});

		watch('./app/assets/styles/**/*.css', function(){
			gulp.start('default');
		});

});