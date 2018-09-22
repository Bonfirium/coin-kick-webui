const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// noinspection JSUnusedLocalSymbols
const webpack = require('webpack');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/src/assets/index.html`,
	filename: 'index.html',
	inject: 'body',
});

// const extractSass = new ExtractTextPlugin({
// 	filename: '[name].[hash].css',
// 	disable: process.env.NODE_ENV === 'local',
// });

const timeCache = Date.now();

module.exports = {
	entry: { app: path.resolve('src/index.js') },
	output: {
		publicPath: '/',
		path: path.resolve('dist'),
		filename: `[name].${timeCache}.js`,
		pathinfo: process.env.NODE_ENV === 'local',
		sourceMapFilename: '[name].js.map',
		chunkFilename: `[name].bundle.js?v=${timeCache}`,
	},
	devtool: process.env.NODE_ENV !== 'local' ? 'cheap-module-source-map' : 'eval',
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: { loader: 'babel-loader' },
		}, {
			test: /\.jsx$/,
			include: /src/,
			use: { loader: 'babel-loader' },
		}, {
			test: /\.scss$/,
			use: [
				'style-loader', // or MiniCssExtractPlugin.loader
				{ loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
				{ loader: 'sass-loader', options: { sourceMap: true } },
			],
		}, {
			test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
			loader: 'url-loader?limit=100000',
		}],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
	resolve: {
		modules: [
			'node_modules',
			path.resolve('src'),
		],
		extensions: ['.js', '.jsx', '.json'],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		HTMLWebpackPluginConfig,
	],
};
