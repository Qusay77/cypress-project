import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "@qusay77/core-store";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyles, theme } from "./Globals/global";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const persistor = persistStore(store);
const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<Provider store={store}>
				<Global styles={GlobalStyles} />
				<PersistGate persistor={persistor}></PersistGate>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</Provider>
		</StrictMode>,
	);
}
