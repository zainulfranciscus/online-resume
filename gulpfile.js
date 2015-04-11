var gulp = require('gulp'),
    embedlr = require('gulp-embedlr'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

// Set up an express server (but not starting it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
    res.sendfile('index.html', { root: 'dist' });
});

gulp.task('dev', function() {
  // Start webserver
  server.listen(serverport);
  // Start live reload
  lrserver.listen(livereloadport);
  // Run the watch task, to keep taps on changes

});


var src = 'app/';
var dest = 'dist/';
var scss = { in: src + '/styles/*.scss',
		   sassOpts: {
			outputStyle: 'nested',			
			precision: 3,
			errLogToConsole: true
		   },
		   out: dest + '/styles'
};

var sass = require('gulp-sass');

// compile Sass
gulp.task('sass', function() {
	return gulp.src(scss.in)
		.pipe(sass(scss.sassOpts))
		.pipe(gulp.dest(scss.out));
});

var htmlclean = require('gulp-htmlclean');
var html = {
	in: src + "/**/*.html",
};

// minify html
gulp.task('html', function() {
	return gulp.src(html.in).pipe(htmlclean()).pipe(gulp.dest(dest));
	
});

var uglify = require('gulp-uglify');
var del = require('del');

//minify js
var js = {	
	in: src + 'scripts/**/*',
	out: dest + 'scripts/'	
}

gulp.task('minify-js',function(){
	
	del([
		js.dest + '*'
	]);
	
	gulp.src(js.in)
		.pipe(uglify())
		.pipe(gulp.dest(js.out));	
})




//test
var test = 'test/spec/';
var karma = require('gulp-karma');
var testFiles = test + '**/*.js';

gulp.task('test', function() {
  // Be sure to return the stream 
  return gulp.src('./foobar')
    .pipe(karma({
      configFile: 'test/karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero 
      console.log(err);
	  this.emit('end'); 
    });
});

// watch tasks
gulp.task('default', ['html','sass','minify-js','test','dev'], function() {

	// html changes
	gulp.watch(html.in, ['html']);
	
	gulp.watch(scss.in, ['sass']);
	
	gulp.watch(js.in,['minify-js','test']);
	
	gulp.watch(testFiles,['test'])
	
	

});