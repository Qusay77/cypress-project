import { resolve as _resolve, join } from "path";

export const entry = "./src/index.ts";
export const module = {
	rules: [
		{
			test: /\.ts?$/,
			use: "ts-loader",
			exclude: /node_modules/,
		},
	],
};
export const resolve = {
	extensions: [".tsx", ".ts", ".js"],
};
export const output = {
	filename: "bundle.js",
	path: _resolve(__dirname, "dist"),
};
export const devServer = {
	static: join(__dirname, "dist"),
	compress: true,
	port: 4000,
};
