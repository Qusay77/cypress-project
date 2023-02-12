import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "@qusay77/core-store";
const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</StrictMode>,
	);
}