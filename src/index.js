import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import Router from "./router/Router"
import { store } from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</StrictMode>,
)
