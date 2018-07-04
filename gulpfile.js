var gulp = require( 'gulp' ),
	gutil = require("gulp-util"),
	webpack = require( 'webpack' ),
	webpackDevServer = require( 'webpack-dev-server' ),
	sass = require( 'gulp-sass' ),
	sourcemaps = require( 'gulp-sourcemaps' ),
	clean = require( 'gulp-clean' );


var config = {

	port : 8080,

	src : './src',
	dest : './bin',

	markup : {
		src : './src/markup/',
		dest : './bin'
	},

	styles : {
		src : './src/styles/',
		dest : './bin/resources/styles'
	},

	images : {
		src : './src/images/',
		dest : './bin/resources/images'
	},

	fonts : {
		src : './src/fonts/',
		dest : './bin/resources/fonts'
	}

}

gulp.task( 'webpack', function( callback ){

	webpack( require( './webpack.config.js' ), function( err, stats ){
		if( err ) throw new gutil.PluginError("webpack-dev-server", err);
	
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

		callback();
	} );

} );

gulp.task( 'webpack-dev-server', function( callback  ){

	var compiler = webpack( require( './webpack.config.js' ) );

	new webpackDevServer( compiler, {
		contentBase : './bin',
		publicPath : './bin/resources/scripts',
		compress : true,
		port : 8080,
		historyApiFallback : true,
	} ).listen( 8080, 'localhost', function( err ) {
		if( err ) throw new gutil.PluginError("webpack-dev-server", err);
	
		gutil.log("[webpack-dev-server]", "http://localhost:8080/");

		callback();
	});

} );

gulp.task( 'markup', function(){

	return  gulp.src( config.markup.src + '**/*.html' )
				.pipe( gulp.dest( config.markup.dest ) );

} );

gulp.task( 'styles', function(){

	return  gulp.src( config.styles.src + 'main.scss' )
				.pipe( sourcemaps.init() )
				.pipe( sass( { outputStyle : "compressed" } ) )
				.pipe( sourcemaps.write() )
				.pipe( gulp.dest( config.styles.dest ) );

} );

gulp.task( 'images', function(){

	return  gulp.src( config.images.src + '**/*.{png,svg,jpg}' )
				.pipe( gulp.dest( config.images.dest ) );

} );

gulp.task( 'fonts', function(){

	return  gulp.src( config.fonts.src + '**/*.otf' )
				.pipe( gulp.dest( config.fonts.dest ) );

} );


gulp.task( 'watch', function(){

	gulp.watch( config.markup.src + '**/*.html', [ 'markup' ] );
	gulp.watch( config.styles.src + '**/*.{scss,sass}', [ 'styles' ] );

} );

gulp.task( 'clean', function(){

	return  gulp.src( config.dest, { read : false } )
				.pipe( clean( { force : true } ) );

} );

gulp.task( 'assemble', [ 'clean' ], function(){

	gulp.start( 'markup' );
	gulp.start( 'styles' );
	gulp.start( 'images' );
	gulp.start( 'fonts' );

} );

gulp.task( 'build', [ 'assemble' ], function(){

	gulp.start( 'webpack' );

} );

gulp.task( 'run', [ 'assemble' ], function(){

	gulp.start( 'webpack-dev-server' );
	gulp.start( 'watch' );

} );

gulp.task( 'default', function(){

	gulp.start( 'build' );

} );