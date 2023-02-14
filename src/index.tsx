import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "@qusay77/core-store";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyles, theme } from "./Globals/global";
const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<Provider store={store}>
				<Global styles={GlobalStyles} />
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</Provider>
		</StrictMode>,
	);
}