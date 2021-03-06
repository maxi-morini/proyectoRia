module.exports = {
	entry: './src/client/index.js',
	output: {
		path: __dirname + '/src/public',
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}, {
				test: /\.css$/,
				loader: ['style-loader', 'css-loader'],
			}
		]
	},
	node: {
		net: "empty",
		fs: "empty",
	},

};
