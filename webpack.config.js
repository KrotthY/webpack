const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',

	output: {
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
				options: {
					sources: false,
					minimize: false,
				},
			},

			{
				test: /\.css$/i,
				exclude: /style.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /style.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				loader: 'file-loader',
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			title: 'Mi webpack',
			template: './src/index.html',
			filename: './index.html',
		}),

		new MiniCssExtractPlugin({
			//tipos de nombres
			//filename: './nuevo-estilo.css', nombre a eleccion
			//filename: '[name].css',  nombre heredado de el archivo css
			//filename: '[name].[fullhash].css', ideal para desarrollo
			filename: '[name].css',
			ignoreOrder: false,
		}),

		new CopyPlugin({
			patterns: [{ from: 'src/assets/', to: 'assets/' }],
		}),
	],
};
