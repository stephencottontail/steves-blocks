var path = require( 'path' );
var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var rename = require( 'gulp-rename' );
var postCSS = require( 'gulp-postcss' );

gulp.task( 'styles', function() {
	return gulp.src( [ './src/**/*.scss' ] )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( postCSS() )
		.pipe( rename( function( file ) {
			return {
				dirname: 'dist',
				basename: file.basename,
				extname: file.extname
			}
		} ) )
		.pipe( gulp.dest( '.' ) );
} );
			   
gulp.task( 'watch', function() {
	gulp.watch( './src/**/*.scss', gulp.series( 'styles' ) );
} );
