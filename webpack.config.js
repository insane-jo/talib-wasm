const webpack = require('webpack');
const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				},

				test: /\.js$/
			},
			{
				test: /\.xml$/,
				loader: 'xml-loader',
				options: {
					explicitArray: true
				}
			}
		]
	},

	output: {
		chunkFilename: '[name].js',
		filename: '[name].js',
		path: path.resolve(__dirname, 'build'),
		libraryTarget: "commonjs2"
	},

	mode: 'production',

	optimization: {

	},

	target: "node",

	externals: {
		// fs: 'throw no \'fs\'',
		// ws: 'throw no \'ws\'',
		ws: '',
		// path: 'throw no \'path\'',
		// crypto: 'throw no \'crypto\'',
		'src/common-for-xml': ''
	}
};
