const path = require( 'path' );
var WriteFilePlugin = require( 'write-file-webpack-plugin' );

module.exports = {

	entry : './src/scripts/index.js',

	output : {
		filename : 'bundle.js',
		path : path.resolve( __dirname, 'bin/resources/scripts' )
	},

	module : {
        rules : [
        	{
        		test : /\.js$/,
        		exclude : /node-modules/,
        		use : {
        			loader : 'babel-loader'
        		}
        	},
        	{
				test : /\.json$/,
				loader : 'json-loader',
				exclude : /node_modules/
			}
        ]
    },

    resolve : {
		modules: [
			path.resolve( './node_modules' ),
			path.resolve( './src/scripts' )
		],
		extensions: [ '.js', '.jsx', '.json' ]
	},

	mode : 'development',	

	devServer : {
		contentBase : path.join( __dirname, 'bin' ),
		publicPath: path.join(__dirname, 'bin'),
		compress : true,
		port : 8080
	},

	plugins : [
		new WriteFilePlugin()
	],

	watch : true,
	watchOptions: {
		aggregateTimeout : 500,
		poll : 1000
	}

}