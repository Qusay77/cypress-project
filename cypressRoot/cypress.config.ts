import { devServer } from "@cypress/webpack-dev-server";
import { defineConfig } from "cypress";

export default defineConfig({
	component: {
		devServer(devServerConfig) {
			return devServer({
				...devServerConfig,
				framework: "react",
				webpackConfig: require("./cypress/webpack.config"),
			});
		},
	},
});
