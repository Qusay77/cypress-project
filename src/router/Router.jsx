import React from "react"
import { Router } from "@reach/router"
import App from "../App"
import Dashboard from "../component/dashboard/Dashboard"

export default function MainRouter() {
	return (
		<Router>
			<App path="/" />
			<Dashboard path="/dashboard" />
		</Router>
	)
}
