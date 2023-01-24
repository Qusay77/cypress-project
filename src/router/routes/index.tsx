import { Router } from "@reach/router";
import Home from "../../Home";
import LoginPage from "../../pages/Login";
import { PageRoute } from "@qusay77/router-page-route";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
export default function MainRouter() {
	return (
		<Router>
			<PageRoute Component={<Home />} path="/" />
			<PageRoute Component={<LoginPage />} path="/login" />
			<PageRoute Component={<LinkedInCallback />} path="/linkedin" />
		</Router>
	);
}
