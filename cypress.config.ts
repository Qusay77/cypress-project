import { defineConfig } from "cypress";
import { devServer } from "@cypress/vite-dev-server";
import viteConfig from "./vite.config";
export default defineConfig({
	component: {
		devServer(devServerConfig) {
			return devServer({
				...devServerConfig,
				framework: "react",
				viteConfig,
			});
		},
	},
});
