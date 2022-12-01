import React from "react";
import { Router } from "@reach/router";
import Home from "../../Home";
import Dashboard from "../../pages/Dashboard";
import { PageRoute } from "../PageRoute";

export default function MainRouter() {
	return (
		<Router>
			<PageRoute Component={<Home />} path="/" />
			<PageRoute Component={<Dashboard />} path="/dashboard" />
		</Router>
	);
}
