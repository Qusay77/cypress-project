import { Router } from "@reach/router";
import Home from "../../Home";
import Dashboard from "../../pages/Dashboard";
import { PageRoute } from "@qusay77/router-page-route";

export default function MainRouter() {
	return (
		<Router>
			<PageRoute Component={<Home />} path="/" />
			<PageRoute Component={<Dashboard />} path="/dashboard" />
		</Router>
	);
}
