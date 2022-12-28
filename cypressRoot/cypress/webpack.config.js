/* eslint-disable no-undef */
module.exports = {
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: "ts-loader",
					},
				],
			},
		],
	},
};
