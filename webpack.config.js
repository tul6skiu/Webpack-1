const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: '/src/index.js',
	output: {
		filename: 'boundle.js',
		path: path.resolve(__dirname, 'dist'),
	 	clean: true,
	},
	module: {
		rules: [
			{
				 test: /\.css$/i,
        		 use: [MiniCssExtractPlugin.loader, 'css-loader'],	
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
      template: './src/index.html', // шаблон HTML
    }),
	new MiniCssExtractPlugin(),
	],
	devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
    hot: true,
  },
}