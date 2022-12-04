import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import MainRouter from "./router/routes/MainRouter";
import { store } from "./store";
const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<Provider store={store}>
				<MainRouter />
			</Provider>
		</StrictMode>,
	);
}
